import React, { Component } from 'react';
import classes from './App.module.scss';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  Cell,
  Line,
  PieChart,
  Pie,
  ResponsiveContainer,
  LabelList
} from 'recharts';
import axios from 'axios';
import Layout from '../src/components/Layout/Layout';
import Navbar from '../src/components/Navbar/Navbar';
import UsersInfo from '../src/components/Users/UsersInfo';
import Intention from '../src/components/Users/Intention';
import Budget from "../src/components/Users/Budget";
import Themes from "../src/components/Users/Themes";
import Finance from "../src/components/Finance/Finance";
import Footer from "../src/components/Layout/Footer";



export default class App extends Component {
  state = {
    cadastros: [],
    data01: [],
    intencao: [],
    colors: ["#e2645a", "#86d9e2", "#84b8e2"],
    orcamento: [],
    faturamento: []
  };

  componentDidMount() {
    axios
      .all([
        axios.get(
          "https://dash-lejour.firebaseio.com/-MMNUAz4MGsZv6q5b7jT.json"
        ),
        axios.get(
          "https://dash-lejour.firebaseio.com/-MMNW19ZI318CUwoQNbj.json"
        ),
        axios.get(
          "https://dash-lejour.firebaseio.com/-MMNWBnKfPc0pMvePqy8.json"
        ),
        axios.get(
          "https://dash-lejour.firebaseio.com/-MMNWsryMW51m6_zqiBN.json"
        ),
        axios.get("https://dash-lejour.firebaseio.com/-MMRzwZah_ydOoxtLdb3.json"),
      ])
      .then(
        axios.spread((cadastrosRes, data01Res, intencaoRes, orcamentoRes, faturamentoRes) => {
          this.setState({
            cadastros: cadastrosRes.data,
            data01: data01Res.data,
            intencao: intencaoRes.data,
            orcamento: orcamentoRes.data,
            faturamento: faturamentoRes.data
          });
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Navbar />
          <UsersInfo>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={730}
                height={250}
                data={this.state.cadastros}
                margin={{ top: 15, right: 40, left: 0, bottom: 25 }}
              >
                <XAxis dataKey="periodo" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#e2645a" />
              </LineChart>
            </ResponsiveContainer>
          </UsersInfo>
          <Intention>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={730}
                height={250}
                data={this.state.intencao}
                margin={{ top: 15, right: 40, left: 0, bottom: 25 }}
              >
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#e2645a" />
              </LineChart>
            </ResponsiveContainer>
          </Intention>
          <Themes>
            <ResponsiveContainer>
              <PieChart margin={{ top: 15, right: 40, left: 0, bottom: 25 }}>
                <Tooltip />
                <Pie
                  data={this.state.data01}
                  dataKey="total"
                  nameKey="estilo"
                  cx="50%"
                  cy="50%"
                  label
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {this.state.data01.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={this.state.colors[index]}
                    />
                  ))}
                </Pie>
                <Legend layout="vertical" align="left" verticalAlign="middle" />
              </PieChart>
            </ResponsiveContainer>
          </Themes>
          <Budget>
            <ResponsiveContainer width="90%" height="90%">
              <BarChart
                data={this.state.orcamento}
                margin={{ top: 15, right: 40, left: 0, bottom: 5 }}
              >
                <XAxis dataKey="estilo" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="budget" fill="#84b8e2">
                  {this.state.orcamento.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={this.state.colors[index]}
                    />
                  ))}
                  <LabelList dataKey="budget" position="top" offset="10" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Budget>
        </Layout>
        <Layout>
          <Finance>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={730}
                height={250}
                data={this.state.faturamento}
                margin={{ top: 15, right: 40, left: 40, bottom: 25 }}
              >
                <XAxis dataKey="periodo" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="monthIncome"
                  stroke="#86d9e2"
                  strokeWidth="2"
                />
              </LineChart>
            </ResponsiveContainer>
          </Finance>
        </Layout>
        <Footer />
      </div>
    );
  }
}

