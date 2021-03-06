import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { Grid, Paper, Button } from 'material-ui'
import map from 'lodash.map'
import Dialog, { DialogTitle, DialogActions, DialogContent, DialogContentText } from 'material-ui/Dialog'
import webpackflowLogo from './webpackflow.svg'
import './Index.styl'

class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  render() {
    const items = {
      feature: [
        {
          name: 'webpack',
          link: './#/webpack'
        },
        {
          name: 'react',
          link: './#/react'
        },
        {
          name: 'pug',
          link: './#/pug'
        },
        {
          name: 'stylus',
          link: './#/stylus'
        },
        {
          name: 'postcss',
          link: './#/postcss'
        },
        {
          name: 'post-css-sprite',
          link: './#/PostCssSprite'
        },
        {
          name: 'eslint',
          link: './#/eslint'
        },
        {
          name: 'material-ui',
          link: './#/materialui'
        }
      ]
    }

    return (
      <MuiThemeProvider theme={ createMuiTheme() }>
        <div className="wrapper">

          <Dialog
            open={ this.state.open }
          >
            <DialogTitle>webpackflow</DialogTitle>
            <DialogContent>
              <DialogContentText>
                webpackflow 整合了 webpack、react、pug、stylus、material-ui、postcss、eslint 作为WEB前端开发的框架。在保证优雅地书写代码同时，也确保开发的高效。
              </DialogContentText>
              <DialogActions>
                <Button
                  onClick={ () => this.setState({ open: false }) }
                  color="accent"
                  raised>确定</Button>
              </DialogActions>
            </DialogContent>
          </Dialog>

          <header>
            <Paper className="title">
              <div className="webpackflow-logo" style={ { backgroundImage: 'url(' + webpackflowLogo + ')' } }></div>
              <h1>
                <Button onClick={ () => this.setState({ open: true }) } color="contrast">webpackflow</Button>
              </h1>
              <h3>Ver: 2.0.0</h3>
              <div>
                <a href="https://github.com/cntanglijun/webpackflow">
                  <img src="https://img.shields.io/github/stars/cntanglijun/webpackflow.svg?style=social&label=Star" />
                </a>
              </div>
            </Paper>
          </header>

          { map(items, (item, key) => (
              <section key={ 'section' + key }>
                <Grid className="grid-wrapper" container={ true }>
                  { map(item, (subitem, index) => (
                    <Grid key={ index } className="grid" item={ true } xs={ 12 } sm={ 6 } md={ 4 }>
                      <Paper className="item">
                        <a href={ subitem.link || '###' }>
                          <div className="logo" style={ { backgroundImage: 'url(' + require('./' + subitem.name + '.svg') + ')' } }></div>
                          <div className="info">
                            <h3>{ subitem.name }</h3>
                          </div>
                        </a>
                      </Paper>
                    </Grid>
                  )) }
                </Grid>
              </section>
            )
          ) }

          <footer>
            <p>
              Copyright &copy; <a href="https://github.com/cntanglijun">tanglijun</a>
            </p>
          </footer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Index
