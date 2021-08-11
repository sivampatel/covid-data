import React from "react"
import { Layout, Divider, Spin, Typography, Card, Statistic, Row, Col } from "antd"
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id.toString().toUpperCase(),
            area: props.match.params.area,
            loaded: false,
            title: null,
            cases: null,
            deaths: null,
            weekAvgCases: null,
            weekAvgDeaths: null,
            casesDayTrend: null,
            deathsDayTrend: null,
        }
    }
    
    componentDidMount(){
        this.getData()
    }

    getCbsaTitle = async (id) => {
        return await fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=core-based-statistical-areas-cbsas-and-combined-statistical-areas-csas&q=&facet=cbsa_code&refine.cbsa_code=' + id)
        .then(res => res.json())
        .then(res => res.records[0].fields.cbsa_title)
    }

    getName = (res) => {
        if(this.state.area === 'state')
            return `${res.state}, ${res.country}`
        if(this.state.area === 'county')
            return `${res.county}, ${res.state}`
        if(this.state.area === 'cbsa')
            return this.getCbsaTitle(this.state.id)
        return 'United States'
    }

    getData = async () => {
        fetch('https://api.covidactnow.org/v2/' + this.state.area + '/' + this.state.id + '.timeseries.json?apiKey=7db28a8b69614fc78c3556b2af94b9c5')
        .then(res => res.json())
        .then(async (res) => {
            let week = res.actualsTimeseries.slice(-7)
            let weekAvgCases = week.map(x => x.newCases || 0).reduce((x, y) => x + y, 0) / 7
            let weekAvgDeaths = week.map(x => x.newDeaths || 0).reduce((x, y) => x + y, 0) / 7
            let casesDayTrend = (res.actuals.newCases - week.slice(-2)[0].newCases) / week.slice(-2)[0].newCases
            let deathsDayTrend = (res.actuals.newDeaths - week.slice(-2)[0].newDeaths) / (week.slice(-2)[0].newDeaths || 1)
            let title = await this.getName(res)
            this.setState({
                loaded: true,
                title: title,
                cases: res.actuals.newCases,
                deaths: res.actuals.newDeaths,
                casesBefore: res.actuals.newCases - week[5].newCases,
                deathsBefore: res.actuals.newDeaths - week[5].newDeaths,
                weekAvgCases: parseInt(weekAvgCases),
                weekAvgDeaths: parseInt(weekAvgDeaths),
                casesDayTrend: casesDayTrend,
                deathsDayTrend: deathsDayTrend,
            })
        })
    }


    render() {
        return (
            <div>
                <Title>{ this.state.title || '...' }</Title>
                <Card style={ { border: `none` } } >
                    <Row align="middle" justify="center">
                        <Col span={ 8 }>
                            <Card title="Cases" bordered={ false } loading={ this.state.loading }>
                                <Row justify="space-around" gutter={ [24, 36] } >
                                    <Col>
                                        <Statistic title="New Cases" value={ this.state.cases } />
                                    </Col>
                                    <Col>
                                        <Statistic
                                            title="Day Change"
                                            value={ Math.abs(this.state.casesBefore) }
                                            valueStyle={ { color: this.state.casesBefore > 0 ? '#cf1322' : '#3f8600' } }
                                            prefix={ this.state.casesBefore > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined /> }
                                        />
                                    </Col>
                                    <Col>
                                        <Statistic title="7 Day Avg" value={ this.state.weekAvgCases } />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Row align="middle" justify="center">
                        <Col span={ 8 }>
                            <Card title="Deaths" bordered={ false } loading={ this.state.loading }>
                                <Row justify="space-around" gutter={ [24, 36] }>
                                    <Col>
                                        <Statistic title="New Deaths" value={ this.state.deaths } />
                                    </Col>
                                    <Col>
                                        <Statistic
                                            title="Day Change"
                                            value={ Math.abs(this.state.deathsBefore) }
                                            valueStyle={ { color: this.state.deathsBefore > 0 ? '#cf1322' : '#3f8600' } }
                                            prefix={ this.state.deathsBefore > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined /> }
                                        />
                                    </Col>
                                    <Col>
                                        <Statistic title="7 Day Avg" value={ this.state.weekAvgDeaths } />
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default View;