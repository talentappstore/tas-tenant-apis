node {
    startBuildNotification()
    checkout scm

    dir('tas-des-static') {
        git url: 'https://github.com/talentappstore/tas-des-static.git'
    }

    env.NODEJS_HOME = "${tool 'tas-des'}"
    env.PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"

    sh 'tas-des-static/scripts/builddes.sh docs'

    withAWS(region: 'ap-southeast-2', credentials: 'terraform-aws-credentials') {
        if (env.BRANCH_NAME != 'master') {
            s3Upload acl: 'Private', bucket: 'devdocsdev', file: 'docs', path: "${env.BRANCH_NAME}/${env.BUILD_NUMBER}"
        }
    }
}
