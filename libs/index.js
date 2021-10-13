
window.$docsify = {
    el: "#main",
    name: 'Captives',
    themeColor: '#3F51B5',//主题色
    // logo: './img/xfshz.PNG',
    repo: 'https://github.com/captives/docs',// 右上角小部件
    auto2top: true, //切换页面后是否自动跳转到页面顶部
    coverpage: ["/", "/client/", "/server/"],//true, //封面图
    maxLevel: 3, //配置最大支持渲染的标题层级
    onlyCover: false, // 主页仅加载封面，不能滚动到其他页
    loadSidebar: true, //加载自定义侧边栏
    loadNavbar: true, //加载自定义导航栏
    mergeNavbar: true, //小屏设备下合并导航栏到侧边栏。
    // relativePath: true,    // 启用相对路径
    // routerMode: 'history', //路由方式 默认hash
    // nameLink: '/docs/',
    subMaxLevel: 2, //自定义侧边栏同时也可以开启目录功能
    formatUpdated: '{YYYY}-{MM}-{DD} {HH}:{mm}', //变量显示文档更新日期
    notFoundPage: {
        '/': 'error.md',
        '/client': 'client/error.md',
        '/server': 'server/error.md',
    },
    topMargin: 190, //距离页面顶部有一定空间
    search: {
        placeholder: '搜索试试',
        noData: '抱歉！找不到对应的结果'
    },
    pagination: {
        previousText: '上一节',
        nextText: '下一节',
        crossChapter: true
    },
    plugins: [
        // DocsifyCodefund.create('xxxx-xxx-xxx'), // change to your codefund id
        function (hook, vm) {
            hook.init(function () {
                // 初始化完成后调用，只调用一次，没有参数。
                console.log(window.location.hash, document.querySelector('main'));
            });
            hook.beforeEach(function (html) {
                // 每次开始解析 Markdown 内容时调用
                return html + '\n' + '⏰ 更新于： {docsify-updated} ';
            });
            hook.mounted(function () {
                // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
                if (window.location.hash == "#/") {
                    document.querySelector('main').parentNode.removeChild(document.querySelector('main'));
                }
            });

            /*   
            hook.doneEach(function () {
                var label, domObj, main, divEle, gitalk;
                label = vm.route.path.split('/').pop();
                domObj = Docsify.dom;
                main = domObj.getNode('#main');
                Array.apply(null, document.querySelectorAll('div.gitalk-container')).forEach(function (ele) {
                    ele.remove();
                });
                divEle = domObj.create('div');
                divEle.id = 'gitalk-container-' + label;
                divEle.className = 'gitalk-container';
                divEle.style = 'width: ' + main.clientWidth + 'px; margin: 0 auto 20px;';
                domObj.appendTo(domObj.find('.content'), divEle);
                gitalk = new Gitalk(Object.assign(gitalkConfig, { id: !label ? 'home' : label }));
                gitalk.render('gitalk-container-' + label);
            });
            */

        }
    ]
}


/*
Gitalk 设置
clientID String

必须. GitHub Application Client ID.

clientSecret String

必须. GitHub Application Client Secret.

repo String

必须. GitHub repository.

owner String

必须. GitHub repository 所有者，可以是个人或者组织。

admin Array

必须. GitHub repository 的所有者和合作者 (对这个 repository 有写权限的用户)。

id String

Default: location.href.

页面的唯一标识。长度必须小于50。

number Number

Default: -1.

页面的 issue ID 标识，若未定义number属性则会使用id进行定位。

labels Array

Default: ['Gitalk'].

GitHub issue 的标签。

title String

Default: document.title.

GitHub issue 的标题。

body String

Default: location.href + header.meta[description].

GitHub issue 的内容。

language String

Default: navigator.language || navigator.userLanguage.

设置语言，支持 [en, zh-CN, zh-TW]。

perPage Number

Default: 10.

每次加载的数据大小，最多 100。

distractionFreeMode Boolean

Default: false。

类似Facebook评论框的全屏遮罩效果.

pagerDirection String

Default: 'last'

评论排序方式， last为按评论创建时间倒叙，first为按创建时间正序。

createIssueManually Boolean

Default: false.

如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。

proxy String

Default: https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token.

GitHub oauth 请求到反向代理，为了支持 CORS。 为什么要这样?

flipMoveOptions Object

Default:

  {
    staggerDelayBy: 150,
    appearAnimation: 'accordionVertical',
    enterAnimation: 'accordionVertical',
    leaveAnimation: 'accordionVertical',
  }
评论列表的动画。 参考

enableHotKey Boolean

Default: true.

启用快捷键(cmd|ctrl + enter) 提交评论.
*/