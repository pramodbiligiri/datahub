(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{113:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var a=r(162),n=r(163),i=(r(0),r(164)),o={title:"Debugging Guide",hide_title:!0,slug:"/debugging",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/debugging.md"},s={unversionedId:"docs/debugging",id:"docs/debugging",isDocsHomePage:!1,title:"Debugging Guide",description:"Debugging Guide",source:"@site/genDocs/docs/debugging.md",slug:"/debugging",permalink:"/docs/debugging",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/debugging.md",version:"current",sidebar:"overviewSidebar",previous:{title:"Quickstart Guide",permalink:"/docs/quickstart"},next:{title:"Architecture Overview",permalink:"/docs/architecture/architecture"}},c=[{value:"How can I confirm if all Docker containers are running as expected after a quickstart?",id:"how-can-i-confirm-if-all-docker-containers-are-running-as-expected-after-a-quickstart",children:[]},{value:"My elasticsearch or broker container exited with error or was stuck forever",id:"my-elasticsearch-or-broker-container-exited-with-error-or-was-stuck-forever",children:[]},{value:"How can I check if MXE Kafka topics are created?",id:"how-can-i-check-if-mxe-kafka-topics-are-created",children:[]},{value:"How can I check if search indices are created in Elasticsearch?",id:"how-can-i-check-if-search-indices-are-created-in-elasticsearch",children:[]},{value:"How can I check if data has been loaded into MySQL properly?",id:"how-can-i-check-if-data-has-been-loaded-into-mysql-properly",children:[]},{value:"Getting error while starting Docker containers",id:"getting-error-while-starting-docker-containers",children:[{value:"<code>bind: address already in use</code>",id:"bind-address-already-in-use",children:[]},{value:"<code>OCI runtime create failed</code>",id:"oci-runtime-create-failed",children:[]},{value:"<code>failed to register layer: devmapper: Unknown device</code>",id:"failed-to-register-layer-devmapper-unknown-device",children:[]},{value:"<code>ERROR: for kafka-rest-proxy  Get https://registry-1.docker.io/v2/confluentinc/cp-kafka-rest/manifests/5.4.0: EOF</code>",id:"error-for-kafka-rest-proxy--get-httpsregistry-1dockeriov2confluentinccp-kafka-restmanifests540-eof",children:[]}]},{value:"toomanyrequests: too many failed login attempts for username or IP address",id:"toomanyrequests-too-many-failed-login-attempts-for-username-or-ip-address",children:[]},{value:"Seeing <code>Table &#39;datahub.metadata_aspect&#39; doesn&#39;t exist</code> error when logging in",id:"seeing-table-datahubmetadata_aspect-doesnt-exist-error-when-logging-in",children:[]},{value:"I&#39;ve messed up my docker setup. How do I start from scratch?",id:"ive-messed-up-my-docker-setup-how-do-i-start-from-scratch",children:[]}],l={rightToc:c};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"debugging-guide"},"Debugging Guide"),Object(i.b)("h2",{id:"how-can-i-confirm-if-all-docker-containers-are-running-as-expected-after-a-quickstart"},"How can I confirm if all Docker containers are running as expected after a quickstart?"),Object(i.b)("p",null,"You can list all Docker containers in your local by running ",Object(i.b)("inlineCode",{parentName:"p"},"docker container ls"),". You should expect to see a log similar to the below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'CONTAINER ID        IMAGE                                                 COMMAND                  CREATED             STATUS              PORTS                                                      NAMES\n979830a342ce        linkedin/datahub-mce-consumer:latest                "bash -c \'while ping\u2026"   10 hours ago        Up 10 hours                                                                    datahub-mce-consumer\n3abfc72e205d        linkedin/datahub-frontend-react:latest              "datahub-frontend\u2026"   10 hours ago        Up 10 hours         0.0.0.0:9002->9002/tcp                                     datahub-frontend\n50b2308a8efd        linkedin/datahub-mae-consumer:latest                "bash -c \'while ping\u2026"   10 hours ago        Up 10 hours                                                                    datahub-mae-consumer\n4d6b03d77113        linkedin/datahub-gms:latest                         "bash -c \'dockerize \u2026"   10 hours ago        Up 10 hours         0.0.0.0:8080->8080/tcp                                     datahub-gms\nc267c287a235        landoop/schema-registry-ui:latest                     "/run.sh"                10 hours ago        Up 10 hours         0.0.0.0:8000->8000/tcp                                     schema-registry-ui\n4b38899cc29a        confluentinc/cp-schema-registry:5.2.1                 "/etc/confluent/dock\u2026"   10 hours ago        Up 10 hours         0.0.0.0:8081->8081/tcp                                     schema-registry\n37c29781a263        confluentinc/cp-kafka:5.2.1                           "/etc/confluent/dock\u2026"   10 hours ago        Up 10 hours         0.0.0.0:9092->9092/tcp, 0.0.0.0:29092->29092/tcp           broker\n15440d99a510        docker.elastic.co/kibana/kibana:5.6.8                 "/bin/bash /usr/loca\u2026"   10 hours ago        Up 10 hours         0.0.0.0:5601->5601/tcp                                     kibana\n943e60f9b4d0        neo4j:4.0.6                                           "/sbin/tini -g -- /d\u2026"   10 hours ago        Up 10 hours         0.0.0.0:7474->7474/tcp, 7473/tcp, 0.0.0.0:7687->7687/tcp   neo4j\n6d79b6f02735        confluentinc/cp-zookeeper:5.2.1                       "/etc/confluent/dock\u2026"   10 hours ago        Up 10 hours         2888/tcp, 0.0.0.0:2181->2181/tcp, 3888/tcp                 zookeeper\n491d9f2b2e9e        docker.elastic.co/elasticsearch/elasticsearch:5.6.8   "/bin/bash bin/es-do\u2026"   10 hours ago        Up 10 hours         0.0.0.0:9200->9200/tcp, 9300/tcp                           elasticsearch\nce14b9758eb3        mysql:5.7\n')),Object(i.b)("p",null,"Also you can check individual Docker container logs by running ",Object(i.b)("inlineCode",{parentName:"p"},"docker logs <<container_name>>"),". For ",Object(i.b)("inlineCode",{parentName:"p"},"datahub-gms"),", you should see a log similar to this at the end of the initialization:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"2020-02-06 09:20:54.870:INFO:oejs.Server:main: Started @18807ms\n")),Object(i.b)("p",null,"For ",Object(i.b)("inlineCode",{parentName:"p"},"datahub-frontend-react"),", you should see a log similar to this at the end of the initialization:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"09:20:22 [main] INFO  play.core.server.AkkaHttpServer - Listening for HTTP on /0.0.0.0:9002\n")),Object(i.b)("h2",{id:"my-elasticsearch-or-broker-container-exited-with-error-or-was-stuck-forever"},"My elasticsearch or broker container exited with error or was stuck forever"),Object(i.b)("p",null,"If you're seeing errors like below, chances are you didn't give enough resource to docker. Please make sure to allocate at least 8GB of RAM + 2GB swap space."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"datahub-gms             | 2020/04/03 14:34:26 Problem with request: Get http://elasticsearch:9200: dial tcp 172.19.0.5:9200: connect: connection refused. Sleeping 1s\nbroker                  | [2020-04-03 14:34:42,398] INFO Client session timed out, have not heard from server in 6874ms for sessionid 0x10000023fa60002, closing socket connection and attempting reconnect (org.apache.zookeeper.ClientCnxn)\nschema-registry         | [2020-04-03 14:34:48,518] WARN Client session timed out, have not heard from server in 20459ms for sessionid 0x10000023fa60007 (org.apache.zookeeper.ClientCnxn)\n")),Object(i.b)("h2",{id:"how-can-i-check-if-mxe-kafka-topics-are-created"},"How can I check if ",Object(i.b)("a",{parentName:"h2",href:"/docs/what/mxe"},"MXE")," Kafka topics are created?"),Object(i.b)("p",null,"You can use a utility like ",Object(i.b)("a",{parentName:"p",href:"https://github.com/edenhill/kafkacat"},"kafkacat")," to list all topics.\nYou can run below command to see the Kafka topics created in your Kafka broker."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"kafkacat -L -b localhost:9092\n")),Object(i.b)("p",null,"Confirm that ",Object(i.b)("inlineCode",{parentName:"p"},"MetadataChangeEvent")," & ",Object(i.b)("inlineCode",{parentName:"p"},"MetadataAuditEvent")," topics exist besides the default ones. Example response as below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'Metadata for all topics (from broker 1: localhost:9092/1):\n 1 brokers:\n  broker 1 at localhost:9092\n 5 topics:\n  topic "_schemas" with 1 partitions:\n    partition 0, leader 1, replicas: 1, isrs: 1\n  topic "__consumer_offsets" with 50 partitions:\n    partition 0, leader 1, replicas: 1, isrs: 1\n    partition 1, leader 1, replicas: 1, isrs: 1\n    partition 2, leader 1, replicas: 1, isrs: 1\n    partition 3, leader 1, replicas: 1, isrs: 1\n    partition 4, leader 1, replicas: 1, isrs: 1\n    partition 5, leader 1, replicas: 1, isrs: 1\n    partition 6, leader 1, replicas: 1, isrs: 1\n    partition 7, leader 1, replicas: 1, isrs: 1\n    partition 8, leader 1, replicas: 1, isrs: 1\n    partition 9, leader 1, replicas: 1, isrs: 1\n    partition 10, leader 1, replicas: 1, isrs: 1\n    partition 11, leader 1, replicas: 1, isrs: 1\n    partition 12, leader 1, replicas: 1, isrs: 1\n    partition 13, leader 1, replicas: 1, isrs: 1\n    partition 14, leader 1, replicas: 1, isrs: 1\n    partition 15, leader 1, replicas: 1, isrs: 1\n    partition 16, leader 1, replicas: 1, isrs: 1\n    partition 17, leader 1, replicas: 1, isrs: 1\n    partition 18, leader 1, replicas: 1, isrs: 1\n    partition 19, leader 1, replicas: 1, isrs: 1\n    partition 20, leader 1, replicas: 1, isrs: 1\n    partition 21, leader 1, replicas: 1, isrs: 1\n    partition 22, leader 1, replicas: 1, isrs: 1\n    partition 23, leader 1, replicas: 1, isrs: 1\n    partition 24, leader 1, replicas: 1, isrs: 1\n    partition 25, leader 1, replicas: 1, isrs: 1\n    partition 26, leader 1, replicas: 1, isrs: 1\n    partition 27, leader 1, replicas: 1, isrs: 1\n    partition 28, leader 1, replicas: 1, isrs: 1\n    partition 29, leader 1, replicas: 1, isrs: 1\n    partition 30, leader 1, replicas: 1, isrs: 1\n    partition 31, leader 1, replicas: 1, isrs: 1\n    partition 32, leader 1, replicas: 1, isrs: 1\n    partition 33, leader 1, replicas: 1, isrs: 1\n    partition 34, leader 1, replicas: 1, isrs: 1\n    partition 35, leader 1, replicas: 1, isrs: 1\n    partition 36, leader 1, replicas: 1, isrs: 1\n    partition 37, leader 1, replicas: 1, isrs: 1\n    partition 38, leader 1, replicas: 1, isrs: 1\n    partition 39, leader 1, replicas: 1, isrs: 1\n    partition 40, leader 1, replicas: 1, isrs: 1\n    partition 41, leader 1, replicas: 1, isrs: 1\n    partition 42, leader 1, replicas: 1, isrs: 1\n    partition 43, leader 1, replicas: 1, isrs: 1\n    partition 44, leader 1, replicas: 1, isrs: 1\n    partition 45, leader 1, replicas: 1, isrs: 1\n    partition 46, leader 1, replicas: 1, isrs: 1\n    partition 47, leader 1, replicas: 1, isrs: 1\n    partition 48, leader 1, replicas: 1, isrs: 1\n    partition 49, leader 1, replicas: 1, isrs: 1\n  topic "MetadataChangeEvent" with 1 partitions:\n    partition 0, leader 1, replicas: 1, isrs: 1\n  topic "__confluent.support.metrics" with 1 partitions:\n    partition 0, leader 1, replicas: 1, isrs: 1\n  topic "MetadataAuditEvent" with 1 partitions:\n    partition 0, leader 1, replicas: 1, isrs: 1\n')),Object(i.b)("h2",{id:"how-can-i-check-if-search-indices-are-created-in-elasticsearch"},"How can I check if search indices are created in Elasticsearch?"),Object(i.b)("p",null,"You can run below command to see the search indices created in your Elasticsearch."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:9200/_cat/indices\n")),Object(i.b)("p",null,"Confirm that ",Object(i.b)("inlineCode",{parentName:"p"},"datasetdocument")," & ",Object(i.b)("inlineCode",{parentName:"p"},"corpuserinfodocument")," indices exist besides the default ones. Example response as below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yellow open .monitoring-es-6-2020.01.27     hNu-jjU3Tl2SKKFdXzjxHQ 1 1 27279 34  14.8mb  14.8mb\nyellow open .watcher-history-6-2020.01.27   70BeSxOkQiCsBCGNtZNfAw 1 1  1210  0     1mb     1mb\nyellow open corpuserinfodocument            VCupUjstS4SrZHLDruwVzg 5 1     2  0    11kb    11kb\nyellow open .monitoring-kibana-6-2020.01.27 pfJy8HOxRQKG-RQKexMKkA 1 1  1456  0 688.3kb 688.3kb\nyellow open .watches                        jmJxYOjrSamqlTi-UIrxTA 1 1     4  0  19.6kb  19.6kb\nyellow open datasetdocument                 5HB_IpjYSbOh3QUSUeuwgA 5 1     3  0  27.9kb  27.9kb\nyellow open .monitoring-alerts-6            qEAoSNpTRRyqO7fqAzwpeg 1 1     1  0   6.2kb   6.2kb\nyellow open .triggered_watches              7g7_MGXFR7mBx0FwQzxpUg 1 1     0  0  48.1kb  48.1kb\nyellow open .kibana                         HEQj4GnTQauN3HkwM8CPng 1 1     1  0   3.2kb   3.2kb\n")),Object(i.b)("h2",{id:"how-can-i-check-if-data-has-been-loaded-into-mysql-properly"},"How can I check if data has been loaded into MySQL properly?"),Object(i.b)("p",null,"Once the mysql container is up and running, you should be able to connect to it dirctly on ",Object(i.b)("inlineCode",{parentName:"p"},"localhost:3306")," using tools such as ",Object(i.b)("a",{parentName:"p",href:"https://www.mysql.com/products/workbench/"},"MySQL Workbench"),". You can also run the following command to invoke ",Object(i.b)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/mysql.html"},"MySQL Command-Line Client")," inside the mysql container."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker exec -it mysql /usr/bin/mysql datahub --user=datahub --password=datahub\n")),Object(i.b)("p",null,"Inspect the content of ",Object(i.b)("inlineCode",{parentName:"p"},"metadata_aspect")," table, which contains the ingested aspects for all entities. "),Object(i.b)("h2",{id:"getting-error-while-starting-docker-containers"},"Getting error while starting Docker containers"),Object(i.b)("p",null,"There can be different reasons why a container fails during initialization. Below are the most common reasons:"),Object(i.b)("h3",{id:"bind-address-already-in-use"},Object(i.b)("inlineCode",{parentName:"h3"},"bind: address already in use")),Object(i.b)("p",null,"This error means that the network port (which is supposed to be used by the failed container) is already in use on your system. You need to find and kill the process which is using this specific port before starting the corresponding Docker container. If you don't want to kill the process which is using that port, another option is to change the port number for the Docker container. You need to find and change the ",Object(i.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/#ports"},"ports")," parameter for the specific Docker container in the ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," configuration file."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Example : On macOS\n\nERROR: for mysql  Cannot start service mysql: driver failed programming external connectivity on endpoint mysql (5abc99513affe527299514cea433503c6ead9e2423eeb09f127f87e2045db2ca): Error starting userland proxy: listen tcp 0.0.0.0:3306: bind: address already in use\n\n   1) sudo lsof -i :3306\n   2) kill -15 <PID found in step1>\n")),Object(i.b)("h3",{id:"oci-runtime-create-failed"},Object(i.b)("inlineCode",{parentName:"h3"},"OCI runtime create failed")),Object(i.b)("p",null,"If you see an error message like below, please make sure to git update your local repo to HEAD."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'ERROR: for datahub-mae-consumer  Cannot start service datahub-mae-consumer: OCI runtime create failed: container_linux.go:349: starting container process caused "exec: \\"bash\\": executable file not found in $PATH": unknown\n')),Object(i.b)("h3",{id:"failed-to-register-layer-devmapper-unknown-device"},Object(i.b)("inlineCode",{parentName:"h3"},"failed to register layer: devmapper: Unknown device")),Object(i.b)("p",null,"This most means that you're out of disk space (see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/issues/1879"},"#1879"),")."),Object(i.b)("h3",{id:"error-for-kafka-rest-proxy--get-httpsregistry-1dockeriov2confluentinccp-kafka-restmanifests540-eof"},Object(i.b)("inlineCode",{parentName:"h3"},"ERROR: for kafka-rest-proxy  Get https://registry-1.docker.io/v2/confluentinc/cp-kafka-rest/manifests/5.4.0: EOF")),Object(i.b)("p",null,"This is most likely a transient issue with ",Object(i.b)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"Docker Registry"),". Retry again later."),Object(i.b)("h2",{id:"toomanyrequests-too-many-failed-login-attempts-for-username-or-ip-address"},"toomanyrequests: too many failed login attempts for username or IP address"),Object(i.b)("p",null,"Try the following"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"rm ~/.docker/config.json\ndocker login\n")),Object(i.b)("p",null,"More discussions on the same issue ",Object(i.b)("a",{parentName:"p",href:"https://github.com/docker/hub-feedback/issues/1250"},"https://github.com/docker/hub-feedback/issues/1250")),Object(i.b)("h2",{id:"seeing-table-datahubmetadata_aspect-doesnt-exist-error-when-logging-in"},"Seeing ",Object(i.b)("inlineCode",{parentName:"h2"},"Table 'datahub.metadata_aspect' doesn't exist")," error when logging in"),Object(i.b)("p",null,"This means the database wasn't properly initialized as part of the quickstart processs (see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/issues/1816"},"#1816"),"). Please run the following command to manually initialize it."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker exec -i mysql sh -c 'exec mysql datahub -udatahub -pdatahub' < docker/mysql/init.sql\n")),Object(i.b)("h2",{id:"ive-messed-up-my-docker-setup-how-do-i-start-from-scratch"},"I've messed up my docker setup. How do I start from scratch?"),Object(i.b)("p",null,"Run the following script to remove all the containers and volumes created during the quickstart tutorial. Note that you'll also lose all the data as a result."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"./docker/nuke.sh\n")))}d.isMDXComponent=!0},162:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return a}))},163:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,"a",(function(){return a}))},164:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(r),b=a,h=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return r?n.a.createElement(h,s(s({ref:t},l),{},{components:r})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);