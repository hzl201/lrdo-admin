const fullMenus = [
  {
    title: '首页',
    key: 'Home',
    icon: 'icon-monitor',
    count: 1
  },
  {
    title: '资源管理',
    key: 'cmdb',
    icon: 'icon-server',
    children: [
      {
        title: '主机管理',
        key: 'AssetServer'
      },
      {
        title: '数据库管理',
        key: 'AssetDB'
      }
    ]
  },
  {
    title: '安全防护',
    key: 'tablelist',
    icon: 'icon-help',
    children: [
      {
        title: '漏洞修复',
        key: 'BugFix'
      },
      {
        title: '病毒查杀',
        key: 'VirusScanner'
      }
    ]
  },
  {
    title: '作业配置',
    key: 'icon-align-left',
    icon: 'icon-cog',
    children: [
      {
        title: '应用配置',
        key: 'PublishConfig'
      },
      {
        title: '代码仓库',
        key: 'CodeRepository'
      },
      {
        title: '源码发布',
        key: 'Jenkins_Manager'
      }
    ]
  },
  {
    title: '任务模版',
    key: 'task_layout',
    icon: 'icon-clipboard',
    children: [
      {
        title: '命令管理',
        key: 'CommandList'
      }
    ]
  },
  {
    title: '定时任务',
    key: 'cron',
    icon: 'icon-clock',
    children: [
      {
        title: '定时列表',
        key: 'CronJobs'
      },
      {
        title: '任务日志',
        key: 'CronLogs'
      }
    ]
  },
  {
    title: '配置中心',
    key: 'confd',
    icon: 'icon-cog',
    children: [
      {
        title: '测试项目配置',
        key: 'Confd_TestProject'
      },
      {
        title: '在建项目配置',
        key: 'Confd_MasterProject'
      }
    ]
  },
  {
    title: '域名管理',
    key: 'domain',
    icon: 'icon-globe',
    children: [
      {
        title: '域名解析',
        key: 'Domain_Name_Manage'
      },
      {
        title: '域名监控',
        key: 'Domain_Name_Monitor'
      }
    ]
  },
  {
    title: '运维工具',
    key: 'devopstools',
    icon: 'icon-box',
    children: [
      {
        title: '提醒管理',
        key: 'Paid_Reminder'
      },
      {
        title: '项目管理',
        key: 'Project_Manager'
      },
      {
        title: '事件管理',
        key: 'Event_Manager'
      },
      {
        title: '故障管理',
        key: 'Fault_Manager'
      },
      {
        title: '时间同步',
        key: 'Timesync_Manager'
      }
    ]
  },
  {
    title: '监控报警',
    key: 'monitoringalarm',
    icon: 'icon-bell',
    children: [
      {
        title: 'ZABBIX',
        key: 'Zabbix_Manager'
      },
      {
        title: 'Prometheus',
        key: 'Prometheus_Alert'
      }
    ]
  }
  // ,
  // {
  //   title: 'Icons',
  //   key: 'Icons',
  //   icon: 'icon-heart'
  // }
  // ,
  // {
  //   title: '表单应用',
  //   key: 'form-folder',
  //   icon: 'icon-paper',
  //   children: [
  //     {
  //       title: '基础表单',
  //       key: 'Form'
  //     },
  //     {
  //       title: '表单详情',
  //       key: 'FormDetail'
  //     }
  //   ]
  // },
  // {
  //   title: '模糊匹配',
  //   key: 'AutoComplete-folder',
  //   icon: 'icon-disc',
  //   children: [
  //     {
  //       title: '模糊搜索',
  //       key: 'Autocomplete1'
  //     },
  //     {
  //       title: '场景应用',
  //       key: 'Autocomplete2'
  //     },
  //     {
  //       title: '复杂场景',
  //       key: 'Autocomplete3'
  //     }
  //   ]
  // },
  // {
  //   title: '扩展组件',
  //   key: 'Advance-folder',
  //   icon: 'icon-bar-graph-2',
  //   children: [
  //     {
  //       title: '图表',
  //       key: 'Chart'
  //     },
  //     {
  //       title: '富文本编辑器',
  //       key: 'RicktextEditor'
  //     },
  //     {
  //       title: '代码编辑器',
  //       key: 'CodeEditor'
  //     },
  //     {
  //       title: 'Markdown编辑器',
  //       key: 'MarkdownEditor'
  //     }, {
  //       title: '百度地图',
  //       key: 'BaiduMap'
  //     }
  //   ]
  // },
  // {
  //   title: '系统设置',
  //   key: 'SysSetting',
  //   icon: 'icon-cog',
  //   children: [
  //     {
  //       title: '个人中心',
  //       key: 'AccountBasic'
  //     },
  //     {
  //       title: '安全设置',
  //       key: 'SecuritySetting'
  //     },
  //     {
  //       title: '权限设置',
  //       key: 'Authorization'
  //     }
  //     // {
  //     //   title: '用户管理',
  //     //   key: 'Users'
  //     // }
  //   ]
  // }
];

const getMenus = function (menuIdList = []) {
  return getAuthMenu(fullMenus, menuIdList);
};

let getAuthMenu = (menus, menuIdList) => {
  let configMenu = [];
  for (let menu of menus) {
    let m = Utils.copy(menu);
    if (menuIdList.indexOf(m.key) > -1) {
      configMenu.push(m);
    }
    if (menu.children && menu.children.length) {
      m.children = getAuthMenu(menu.children, menuIdList);
    }
  }
  return configMenu;
};

const getKeys = function (menus) {
  let keys = [];
  for (let menu of menus) {
    keys.push(menu.key);
    if (menu.children && menu.children.length) {
      keys.push(...getKeys(menu.children));
    }
  }
  return keys;
};

let fullMenuKeys = getKeys(fullMenus);

const isAuthPage = function (name) {
  let menus = G.get('SYS_MENUS') || [];
  if (fullMenuKeys.indexOf(name) > -1 && menus.indexOf(name) == -1) {
    return false;
  }
  return true;
};

export { getMenus, fullMenus, fullMenuKeys, isAuthPage };
