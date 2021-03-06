'use strict'
const React = require('react')
const GithubLogo = require('../symbols/githubLogo.svg')

require('./footer.scss')

class Footer extends React.Component {
    render() {
        return (
            <footer className="site-segment">
            <div className="links-container">
            <a href="https://github.com/wix-private/blame-thrower#usage"><GithubLogo /></a>
            </div>
            </footer>
    )
    }
}

module.exports = Footer