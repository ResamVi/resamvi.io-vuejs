pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'yarn run build'
      }
    }
    stage('Deploy') {
      steps {
        sh 'cp dist ~/resamvi.de'
      }
    }
  }
}