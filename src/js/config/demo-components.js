export default [{
  path: '/form',
  name: 'Form',
  component: (resolve) => require(['components/demo-components/form'], resolve),
  meta: { title: '表单', icon: 'icon-paper' }
}, {
  path: '/form-detail',
  name: 'FormDetail',
  component: (resolve) => require(['components/demo-components/form-detail'], resolve),
  meta: { title: '表单详情' }
}, {
  path: '/asset_db',
  name: 'AssetDB',
  component: (resolve) => require(['components/demo-components/cmdb/asset_db'], resolve),
  meta: { title: '数据管理' }
}, {
  path: '/bug-fix',
  name: 'BugFix',
  component: (resolve) => require(['components/demo-components/security/bug-fix'], resolve),
  meta: { title: '漏洞修复' }
}, {
  path: '/virus-scanner',
  name: 'VirusScanner',
  component: (resolve) => require(['components/demo-components/security/virus-scanner'], resolve),
  meta: { title: '病毒查杀' }
}, {
  path: '/asset_server',
  name: 'AssetServer',
  component: (resolve) => require(['components/demo-components/cmdb/asset_server'], resolve),
  meta: { title: '主机管理' }
}, {
  path: '/publishConfig',
  name: 'PublishConfig',
  component: (resolve) => require(['components/demo-components/operation_center/publishConfig'], resolve),
  meta: { title: '应用配置' }
}, {
  path: '/codeRepository',
  name: 'CodeRepository',
  component: (resolve) => require(['components/demo-components/operation_center/codeRepository'], resolve),
  meta: { title: '代码仓库' }
}, {
  path: '/codereview',
  name: 'CodeReview',
  component: (resolve) => require(['components/demo-components/operation_center/codereview'], resolve),
  meta: { title: '代码评审' }
}, {
  path: '/jenkins_manager',
  name: 'Jenkins_Manager',
  component: (resolve) => require(['components/demo-components/operation_center/jenkins_manager'], resolve),
  meta: { title: '源码发布' }
}, {
  path: '/commandlist',
  name: 'CommandList',
  component: (resolve) => require(['components/demo-components/task_layout/commandlist'], resolve),
  meta: { title: '命令管理' }
}, {
  path: '/cronjobs',
  name: 'CronJobs',
  component: (resolve) => require(['components/demo-components/cron/cronjobs'], resolve),
  meta: { title: '定时列表' }
}, {
  path: '/cronlogs',
  name: 'CronLogs',
  component: (resolve) => require(['components/demo-components/cron/cronlogs'], resolve),
  meta: { title: '任务日志' }
}, {
  path: '/confd_testproject',
  name: 'Confd_TestProject',
  component: (resolve) => require(['components/demo-components/confd/confd_testproject'], resolve),
  meta: { title: '测试项目配置' }
}, {
  path: '/confd_masterproject',
  name: 'Confd_MasterProject',
  component: (resolve) => require(['components/demo-components/confd/confd_masterproject'], resolve),
  meta: { title: '在建项目配置' }
}, {
  path: '/domain_name_manage',
  name: 'Domain_Name_Manage',
  component: (resolve) => require(['components/demo-components/domain/domain_name_manage'], resolve),
  meta: { title: '域名解析' }
}, {
  path: '/domain_name_monitor',
  name: 'Domain_Name_Monitor',
  component: (resolve) => require(['components/demo-components/domain/domain_name_monitor'], resolve),
  meta: { title: '域名监控' }
}, {
  path: '/paid_reminder',
  name: 'Paid_Reminder',
  component: (resolve) => require(['components/demo-components/devopstools/paid_reminder'], resolve),
  meta: { title: '提醒管理' }
}, {
  path: '/project_manager',
  name: 'Project_Manager',
  component: (resolve) => require(['components/demo-components/devopstools/project_manager'], resolve),
  meta: { title: '项目管理' }
}, {
  path: '/event_manager',
  name: 'Event_Manager',
  component: (resolve) => require(['components/demo-components/devopstools/event_manager'], resolve),
  meta: { title: '事件管理' }
}, {
  path: '/fault_manager',
  name: 'Fault_Manager',
  component: (resolve) => require(['components/demo-components/devopstools/fault_manager'], resolve),
  meta: { title: '故障管理' }
}, {
  path: '/timesync_manager',
  name: 'Timesync_Manager',
  component: (resolve) => require(['components/demo-components/devopstools/timesync_manager'], resolve),
  meta: { title: '时间同步' }
}, {
  path: '/zabbix_manager',
  name: 'Zabbix_Manager',
  component: (resolve) => require(['components/demo-components/monitoringalarm/zabbix_manager'], resolve),
  meta: { title: 'ZABBIX' }
}, {
  path: '/prometheus_alert',
  name: 'Prometheus_Alert',
  component: (resolve) => require(['components/demo-components/monitoringalarm/prometheus_alert'], resolve),
  meta: { title: 'Prometheus' }
}, {
  path: '/documents',
  name: 'Documents',
  component: (resolve) => require(['components/demo-components/documents'], resolve),
  meta: { title: '文档' }
}, {
  path: '/autocomplete1',
  name: 'Autocomplete1',
  component: (resolve) => require(['components/demo-components/autocomplete1'], resolve),
  meta: { title: '自动补全' }
}, {
  path: '/autocomplete2',
  name: 'Autocomplete2',
  component: (resolve) => require(['components/demo-components/autocomplete2'], resolve),
  meta: { title: '自动补全2' }
}, {
  path: '/autocomplete3',
  name: 'Autocomplete3',
  component: (resolve) => require(['components/demo-components/autocomplete3'], resolve),
  meta: { title: '自动补全3' }
}, {
  path: '/icons',
  name: 'Icons',
  component: (resolve) => require(['components/demo-components/icons'], resolve),
  meta: { title: '图表列表', icon: 'icon-grid' }
}, {
  path: '/form-basic',
  name: 'FormBasic',
  component: (resolve) => require(['components/demo-components/form/basic'], resolve),
  meta: { title: '基础表单', icon: 'icon-paper' }
}, {
  path: '/form-create',
  name: 'FormCreate',
  component: (resolve) => require(['components/demo-components/form/create'], resolve),
  meta: { title: '创建表单' }
}, {
  path: '/table-basic',
  name: 'TableBasic',
  component: (resolve) => require(['components/demo-components/table/basic'], resolve),
  meta: { title: '基础表格' }
}, {
  path: '/table-search',
  name: 'TableSearch',
  component: (resolve) => require(['components/demo-components/table/search'], resolve),
  meta: { title: '查询表格' }
}, {
  path: '/table-detail',
  name: 'TableDetail',
  component: (resolve) => require(['components/demo-components/table/detail'], resolve),
  meta: { title: '表格详情' }
}, {
  path: '/account-basic',
  name: 'AccountBasic',
  component: (resolve) => require(['components/demo-components/account/account'], resolve),
  meta: { title: '个人中心', icon: 'icon-head' }
}, {
  path: '/account-setting/',
  name: 'AccountSetting',
  component: (resolve) => require(['components/demo-components/account/account-setting'], resolve),
  children: [{
    path: 'security-setting',
    name: 'SecuritySetting',
    component: (resolve) => require(['components/demo-components/account/modules/security-setting'], resolve),
    meta: { title: '安全设置' }
  }, {
    path: 'notice-setting',
    name: 'NoticeSetting',
    component: (resolve) => require(['components/demo-components/account/modules/notice-setting'], resolve),
    meta: { title: '通知设置' }
  }],
  meta: { title: '个人设置' }
}, {
  path: '/info-basic',
  name: 'InfoBasic',
  component: (resolve) => require(['components/demo-components/info/basic'], resolve),
  meta: { title: '基础信息' }
}, {
  path: '/info-detail',
  name: 'InfoDetail',
  component: (resolve) => require(['components/demo-components/info/detail'], resolve),
  meta: { title: '信息详情' }
}, {
  path: '/address-picker',
  name: 'AddressPicker',
  component: (resolve) => require(['components/demo-components/components/address-picker'], resolve),
  meta: { title: '地址选择器' }
}, {
  path: '/chart',
  name: 'Chart',
  component: (resolve) => require(['components/demo-components/components/chart'], resolve),
  meta: { title: '图表' }
}, {
  path: '/code-editor',
  name: 'CodeEditor',
  component: (resolve) => require(['components/demo-components/components/code-editor'], resolve),
  meta: { title: '代码编辑器' }
}, {
  path: '/markdown-editor',
  name: 'MarkdownEditor',
  component: (resolve) => require(['components/demo-components/components/markdown-editor'], resolve),
  meta: { title: 'markdown编辑器' }
}, {
  path: '/ricktext-editor',
  name: 'RicktextEditor',
  component: (resolve) => require(['components/demo-components/components/richtext-editor'], resolve),
  meta: { title: '富文本编辑器' }
}, {
  path: '/baidu-map',
  name: 'BaiduMap',
  component: (resolve) => require(['components/demo-components/components/baidu-map'], resolve),
  meta: { title: '百度地图' }
}];
