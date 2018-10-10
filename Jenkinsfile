pipeline {
  agent any
  stages {
    stage('Info') {
      steps {
        sh 'whoami'
        sh 'echo Home: $HOME'
        sh 'yarn --version'
      }
    }

    stage('Build') {
      steps {
        sh 'yarn install'
        sh 'yarn run build'
      }
    }
    stage('Lint') {
      steps {
        sh 'yarn run lint'
      }
    }
    stage('Deploy') {
      steps {
        sh 'cp dist ~/resamvi.de'
      }
    }
  }
}