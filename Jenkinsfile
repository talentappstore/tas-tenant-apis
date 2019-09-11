node {
    stage('Checkout') {
        startBuildNotification()
        checkout scm

        dir('tas-des-static') {
            git url: 'https://github.com/talentappstore/tas-des-static.git'
        }
    }

    stage('Build') {
        env.NODEJS_HOME = "${tool 'tas-des'}"
        env.PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"

        sh 'tas-des-static/scripts/builddes.sh docs'
    }

    stage('Deploy') {
        withAWS(region: 'ap-southeast-2', credentials: 'terraform-aws-credentials') {
            if (env.BRANCH_NAME == 'master') {
                s3Upload acl: 'PublicRead', bucket: 'devdocs.talentappstore.com', file: 'docs'
            } else if (env.BRANCH_NAME ==~ /\d+\.\d+/) {
                s3Upload acl: 'PublicRead', bucket: 'devdocs.talentappstore.com', file: 'docs', path: "v/${env.BRANCH_NAME}"
            } else {
                s3Upload acl: 'PublicRead', bucket: 'devdocsdev', file: 'docs', path: "${env.BRANCH_NAME}/${env.BUILD_NUMBER}"
                echo "https://s3-ap-southeast-2.amazonaws.com/devdocsdev/${env.BRANCH_NAME}/${env.BUILD_NUMBER}/generated/index.html"
            }
        }
    }
}

build job: 'tas/tas-tenant-api-schema/v2_1', parameters: [string(name: 'apiBranch', value: env.BRANCH_NAME)]
