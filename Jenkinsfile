pipeline {
  agent any
  stages {
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