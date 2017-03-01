'use strict'

const data = [{
    "contentId": 326664,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB2V.JEd90jpuFjy0FlXXc0bpXa_!!0-mtopupload.jpg",
    "title": "美美春季装，你的轻盈仙女上线啦！",
    "content": "又到了万物复苏的春天了，仿佛一切美好都开始发酵。美美的春装已经开始不断上线了，终于可以脱下厚重的大衣，化身轻盈多姿，身材婀娜的小仙女啦，是不是对这个季节的爱又多了一分呢？都说小孩子不能输在起跑线上，我的小仙女们，你怎么甘心输在这一年的起跑线上呢？所以赶快整装待发，你爱的自己上线啦！"
}, {
    "contentId": 326662,
    "thumdImage": "https://img.alicdn.com/imgextra/i4/1060815481/TB2XU4CdYplpuFjSspiXXcdfFXa_!!2-mtopupload.png",
    "title": "美丽是你的权利，但必须取之有道",
    "content": "这不前几天在腾讯新闻上这么一件趣事，美国一名胖妞在一个月内竟然减去了210斤体重，让小编目瞪口呆，看完文章才发现原来她不是通过正规的运动减肥，而是在医院做了胃部切除手术，虽然她在短期减肥成功，但这是小编不提倡的，想要健康好身材必须要通过正规的运动来获得，否则危害健康，所以请收下侥幸，选好运动装备出发吧。"
}, {
    "contentId": 326661,
    "thumdImage": "https://img.alicdn.com/imgextra/i1/1060815481/TB23wUfeUhnpuFjSZFEXXX0PFXa_!!0-mtopupload.jpg",
    "title": "春天 你敢不敢和这样的装扮争艳",
    "content": "终于过完了漫长而寒冷的冬季，妹子们早就按耐不住脱下棉袄沐浴在春天的暖阳里，多么温暖。花儿开了，鸟儿叫了，草儿绿了，躲在闺房的年轻姑娘也出来了。它们想与春天比一比谁更美丽。今天小编要为菇娘们推荐潮流范儿的卫衣和多彩的衬衫，让你这个今年比春天还美丽啊。"
}, {
    "contentId": 326660,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB2Mfr1eHJmpuFjSZFwXXaE4VXa_!!0-mtopupload.jpg",
    "title": "过把混搭瘾 假两件怎么配都好看",
    "content": "年都过完了，妹子们是不是开始准备春装了呢？在这小编就要给大家推荐推荐下面10款假两件了~一件设计感十足的假两件可以告别普通穿搭，让你过把混搭瘾，上身瞬间就变得很有味道。换季时节，假两件衣柜里一定要备一件才安心哦～"
}, {
    "contentId": 326659,
    "thumdImage": "https://img.alicdn.com/imgextra/i4/1060815481/TB2RNdqd80lpuFjSszdXXcdxFXa_!!0-mtopupload.jpg",
    "title": "换季闹衣荒？套装穿搭最省心",
    "content": "又到换季时节，面对各种的春装轰炸，衣荒的妹子是不是眼睛都要挑花了呢？那么不妨试试套装啊~Ta从来都是一个好东西，准备好了一整套完美的搭配，省时省事~以下10款，优雅、职场、休闲、运动全都有，就等你穿啦~"
}, {
    "contentId": 326658,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB2JmIeeSFmpuFjSZFrXXayOXXa_!!2-mtopupload.png",
    "title": "厨房清洁小能手，get!",
    "content": "众所周知，厨房问题一向让人头痛，各种油渍与油垢的清洁都会让人心塞，还有很多锅碗瓢盆上长期累积而来的污垢也是十分让人痛苦，看着被油烟污染的墙壁也是十分不爽了，今天小编就是来送福利的了，有了这些各式各样清洁小能手，从此你的厨房生活也会变得十分愉悦了！"
}, {
    "contentId": 326657,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB2aPsdeS0mpuFjSZPiXXbssVXa_!!0-mtopupload.jpg",
    "title": "想在家中放松自己？试试这款家居服怎么样！",
    "content": "一天之中有一半时间是要呆在家中的，这时候选择一套舒适的睡衣就显得尤其重要了，因此如何能够让我们在家中有着舒适的穿着体验就取决于我们是否选择了一套真正合适的家居服啦，今天小编就为大家安利几款十分舒适的家居服，无论在家中活动还是睡觉都是十分不错的选择哦！"
}, {
    "contentId": 326656,
    "thumdImage": "https://img.alicdn.com/imgextra/i4/1060815481/TB2WEfzeJBopuFjSZPcXXc9EpXa_!!0-mtopupload.jpg",
    "title": "干燥的季节心烦意乱？让水杯来帮你！",
    "content": "随着初春的到来，天气是不是显得愈发干燥了呢？这时候补水就成为了我们的第一要务了！一个符合心意的可爱的水杯总是能够让我们时时刻刻记得喝水，让我们整个季节都元气满满哦！今天小编为大家安利几款超级超级棒，十分有个性的水杯，绝对满足你！"
}, {
    "contentId": 326655,
    "thumdImage": "https://img.alicdn.com/imgextra/i3/1060815481/TB2h.k8dR0kpuFjSsziXXa.oVXa_!!0-mtopupload.jpg",
    "title": "创意个性书架，找个理由邂逅书海吧",
    "content": "不得不说纸质书是最适合用来阅读的，无论是手感还是书香，都会令人沉醉在书的海洋里，都说&ldquo;书中自有黄金屋，书中自有颜如玉&rdquo;，在书中确实可以学到很多电子产品中学不到的东西。可是那么多的书放在哪里，小编为大家精心挑选了几款个性创意的书架，它既能帮你解决书本的盛放问题，还能为你的家居装饰增添几分美观。"
}, {
    "contentId": 326654,
    "thumdImage": "https://img.alicdn.com/imgextra/i3/1060815481/TB2QS3RdHBkpuFjy1zkXXbSpFXa_!!0-mtopupload.jpg",
    "title": "刷爆时尚圈的半身裙 总有小亮点",
    "content": "以包臀裙为代表的半身裙在勾勒女性曲线轮廓的同时，营造优雅、端庄的名媛小香风风格。而近来丝绒风琴褶裙那成簇的繁密纹路和点缀其中的金属光泽，同样姿态妖娆地令人炫目。因此，可以说，即使是司空见惯的半身裙，一旦与特定的面料和设计手法相组合，便能塑造出堪称惊艳的亮点，值得每一位爱好时装的姑娘珍藏。"
}, {
    "contentId": 326653,
    "thumdImage": "https://img.alicdn.com/imgextra/i3/1060815481/TB2qjRad88lpuFjSspaXXXJKpXa_!!0-mtopupload.jpg",
    "title": "春暖花开之季，夹克男闪亮登场之时",
    "content": "初春了，正是万物复苏的时候，一切都那么生机勃勃了，生机的季节对于我们男生来说当然要穿的帅帅的出门，你还在春天的季节穿着臃肿的棉衣出门吗？那也太low了吧，那么问题来了，怎么样在别人面前展现帅气和身形呢？那当然是看你穿啥衣服啦，小编为男生推荐帅男必备夹克，那一定是帅帅帅！"
}, {
    "contentId": 326652,
    "thumdImage": "https://img.alicdn.com/imgextra/i3/1060815481/TB2K3gSdMJlpuFjSspjXXcT.pXa_!!0-mtopupload.jpg",
    "title": "精美零食大礼包，承包你的味蕾",
    "content": "零食陪着一代又一代人长大了， 随着生活水平的慢慢提高，零食也在慢慢在升级。现在已经出现了精美版的零食大礼包了，里面全是各种美味的零食，有的还是进口的，对于口味挑剔的宝宝来说，也可以满足你的味蕾。无论是送女友还是送闺蜜都是不错的选择，宝宝们赶紧行动吧。"
}, {
    "contentId": 326651,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB2ndXkXutTMeFjSZFOXXaTiVXa_!!0-mtopupload.jpg",
    "title": "脸型不够小v？精美耳环帮你转移注意力",
    "content": "现在社会的审美对女生的要求还是挺高的，不仅要求肤白貌美，长胳膊小蛮腰，而且脸型也要足够小这样才会显得五官精致又立体。对于脸型不够小的宝宝们来说，就需要借助耳环来修饰啦，一副漂亮的耳环就可以转移别人对脸部的注意力，只要不细看我们依旧是&ldquo;小脸&rdquo;美女一枚嘛。"
}, {
    "contentId": 326650,
    "thumdImage": "https://img.alicdn.com/imgextra/i1/1060815481/TB2YT_eeS0mpuFjSZPiXXbssVXa_!!0-mtopupload.jpg",
    "title": "早春啦，又到一年外套上岗季",
    "content": "终于温度一天比一天高了，天气一天比一天好了，经常可以看到灿烂的蓝天。这个时候我们也该换下臃肿的羽绒服和棉服，换上薄一点但是又充满个性的外套了。搭配上不同的妆容，不同的裤子或裙子，轻轻松松又可演绎一春的时尚。"
}, {
    "contentId": 326649,
    "thumdImage": "https://img.alicdn.com/imgextra/i3/1060815481/TB2B4FiXutTMeFjSZFOXXaTiVXa_!!0-mtopupload.jpg",
    "title": "绝美卤味，开启深夜放毒模式",
    "content": "无论是正在减肥还是不减肥的宝宝们，本质上都是一个实打实的吃货。尤其是对于香辣可口的卤味绝对是减肥杀手，为了还击那些经常在朋友圈晒美食的筒子们，赶紧收下这些绝美的卤味吧，然后就可以天天晚上开启放毒模式，诱惑死他们，其实自己都是在白天吃的，享受到了美味又不会长胖哟！"
}, {
    "contentId": 326648,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB21hANdR8lpuFjy0FnXXcZyXXa_!!0-mtopupload.jpg",
    "title": "10款精致毛衣   让你成为现代白浅",
    "content": "相信大家最近都在追《三生三世十里桃花》，除了被剧情虐的不要不要以外，更是被女主的美貌所倾倒。我们都在梦想着能拥有想白浅一样倾国倾城的美貌。那么这个春天就得好好努力了，赶紧选几款适合自己的时尚范儿毛衣，化上淡妆，配上与毛衣相配的裤子和鞋子，我们就是春日里最美的现代白浅了。"
}, {
    "contentId": 326647,
    "thumdImage": "https://img.alicdn.com/imgextra/i3/1060815481/TB2zEqAeOpnpuFjSZFkXXc4ZpXa_!!0-mtopupload.jpg",
    "title": "别说自己不会生活，是你没选择好餐具！",
    "content": "即使是简单的生活，我们也可以过得有滋有味，吃饭当然也不例外，所以说美美的餐具当然就成为了我们很好的选择啦，今天小编就为大家安利几款十分有新意的餐具，每一款都十分的新颖别致，成为餐桌上一道亮丽的风景，听起来是不是就棒棒哒？赶紧和小编一起来看看吧！"
}, {
    "contentId": 326646,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB2DEH8dHJkpuFjy1zcXXa5FFXa_!!0-mtopupload.jpg",
    "title": "想要生活更有情调？你还需要这套餐具！",
    "content": "随着生活更加丰富多彩，我们对于生活品质、生活格调的需求也越来越高，因此，民以食为天的我们是不是也要提高我们餐桌上的格调呢？这样的话，一套好看的餐具就必不可少啦，今天小编就为大家安利一些超级超级棒的餐具，有了它们，是不是感觉生活是不是更多了一些色彩呢？"
}, {
    "contentId": 326645,
    "thumdImage": "https://img.alicdn.com/imgextra/i1/1060815481/TB21Tb5dHtlpuFjSspfXXXLUpXa_!!0-mtopupload.jpg",
    "title": "不吃早餐?  美味小零食拯救贪睡上班族",
    "content": "总有一些宝宝没有习惯吃早餐的习惯。久而久之身体容易出问题，所以说为了不在体检的时候发现身体出了些小毛病，现在开始一定要养成吃早餐的习惯。每天晚上临睡前在包包里准备一点可口的小零食，第二天就算快迟到了也可以吃到营养早餐啦，懒癌患者们赶紧准备去吧！"
}, {
    "contentId": 326644,
    "thumdImage": "https://img.alicdn.com/imgextra/i2/1060815481/TB2LCArdSFjpuFjSszhXXaBuVXa_!!0-mtopupload.jpg",
    "title": "健康舒适透气的内裤来一打",
    "content": "最常见的生活用品，内裤数其中之一，每天都要穿的贴身物品，所以呢，对于这种贴身的私人物品挑选的时候也得谨慎注意啦，这对身体有一定的影响，如果长期穿戴劣质的内裤，透气性差，那就会带来一系列的疾病隐患，特别是对于女性来说尤为注意，选对内裤就会减少一些疾病的发生，所以小编推荐以下几款舒适又透气的内裤。"
}, {
    "contentId": 326643,
    "thumdImage": "https://img.alicdn.com/imgextra/i4/1060815481/TB2sdv1dHBkpuFjy1zkXXbSpFXa_!!0-mtopupload.jpg",
    "title": "大长腿在冬眠吗？是时候唤醒它啦",
    "content": "冬天是一个苗条妹纸们们都很开心的季节了，因为衣服太厚根本看不到身材，无论是苗条还是丰满的彤彤裹得像熊一样。现在天气开始回暖了，那些冬眠的动物们已经慢慢苏醒了，姑凉们那一双双纤细的大长腿也该展现出来了，赶紧小短裙儿穿起来吧，迷倒一个又一个宅男。"
}, {
    "contentId": 326642,
    "thumdImage": "https://img.alicdn.com/imgextra/i3/1060815481/TB2FTGveUhnpuFjSZFEXXX0PFXa_!!0-mtopupload.jpg",
    "title": "情人节来点不一样，来一套内衣吧！",
    "content": "情人节即将到来，是不是开始纠结送女生什么礼物了呢？送巧克力？那太没有创意了。担心对方不喜欢？不如来一套内衣，相信对方绝对不会拒绝。情人节礼物选得好，能够让两个人的感情迅速升温。单身的妹子也完全可以买来送闺蜜，送自己哦。"
}, {
    "contentId": 326641,
    "thumdImage": "https://img.alicdn.com/imgextra/i4/1060815481/TB2BbmteHBmpuFjSZFAXXaQ0pXa_!!0-mtopupload.jpg",
    "title": "不一般的毛衣给不一般的你",
    "content": "早春依旧寒意袭人，虽然偶尔的阳光明媚，但是早上和晚上仍然是挺冷的。那么，就需要时尚又保暖的穿搭啦！所以，毛衣是首选。不过，不是什么毛衣我们都要穿的，要穿就要穿的不一般！你就是你，人间不一样的烟火！就要配上创意十足，超级个性的毛衣！所以，快快跟随小编来看一下这些意想不到的创意之作吧！"
}]

exports.list = (ctx, next) => {
  ctx.body = {
    result: data
  }
}

exports.detail = (ctx, next) => {
  let item
  const id = ctx.query.id

  data.forEach((d) => {
    if (d.contentId == id) {
      item = d
    }
  })

  if (item) {
    ctx.body = {
      result: item
    }
  }
}
