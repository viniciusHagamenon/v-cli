#! /usr/bin/env node
'use strict'

const program = require('commander')
const shell = require('shelljs')
const packageVersion = require('../package.json').version

program
  .version(packageVersion, '-v --version')
  .command('upgrade-dbeaver')
  .action(() => {
    console.log('Upgrading dbeaver-community...')
    shell.exec('brew update; brew cask upgrade dbeaver-community;')
  })

program.parse(process.argv)
