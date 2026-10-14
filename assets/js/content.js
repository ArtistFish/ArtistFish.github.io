/*
 * 网站内容配置：只需修改此文件，不需要修改页面布局。
 * 个人信息和照片默认留空。填写方法和完整示例见 README.md。
 * Publications / Teaching 已预填 Liren Zhu 网站的示例，请替换为自己的经历。
 * About / Research 正文参考 Liren Zhu 的主页；请按自己的经历修改年级与年份。
 * 正文可用 [文字](URL) 添加链接；多段正文请使用数组。请保留引号、逗号和方括号。
 */
window.SITE_CONTENT = {
  profile: {
    name: "Yiming Yao",         // 英文名或中英文姓名
    bio: "Ph.D. student at PKU",          // 身份，例如职位、学校
    avatar: "assets/images/yiming-yao.jpg",       // 照片路径，例如 assets/images/avatar.jpg
    location: "Beijing",     // 所在地
    affiliation: "Peking University",  // 单位或学校
    email: "yim@stu.pku.edu.cn",
    orcid: "https://orcid.org/my-orcid?orcid=0009-0008-0151-0148",        // 完整 ORCID 页面地址
    github: "",       // 完整 GitHub 页面地址
    scholar: "",      // 完整 Google Scholar 页面地址
    cv: ""            // 简历路径，例如 assets/files/cv.pdf
  },

  // 来源：https://pku-zlr.github.io/；按原意改写，保留相关链接。
  about: [
    "I am currently pursuing a Ph.D. at [Peking University](https://english.pku.edu.cn/) in its [School of Computer Science](https://cs.pku.edu.cn/English/Home.htm), and I am in my fifth year.",
    "I have worked in the [TELOS](https://telos-syslab.github.io/) systems lab since September 2022, under the supervision of Prof. [Xiaolin Wang](https://cs.pku.edu.cn/info/1083/1703.htm), Prof. [Yingwei Luo](https://cs.pku.edu.cn/info/1071/1684.htm), and Prof. [Diyu Zhou](https://zhou-diyu.github.io/). In 2022, I completed a bachelor's degree in computer science at [Peking University](https://www.pku.edu.cn/)."
  ],                  // 个人介绍：每个字符串是一段，可包含 [文字](URL) 链接
  research: [
    "My research is in the general area of computer systems and architectures. I am specifically interested in operating systems, software/hardware co-design, and recently systems for machine learning and large language models."
  ],                  // 研究方向：每个字符串是一段
  // service: [],        // 学术服务：每个字符串是一项

  // 来源：https://pku-zlr.github.io/publications/
  // 条目格式：{ title, authors, highlightAuthor, venue, year, description, links: [{ label, url }] }
  // highlightAuthor 为加下划线的作者全名；需与 authors 中的姓名一致，留空则不突出显示。
  // venue 中已包含年份时，可将 year 留空，避免重复显示。
  publications: [
    {
      title: "Computation is Fast, Use Threadlet!",
      authors: "Yiming Yao, Xiaohe Qin, Yi Fan, Yuanlong Li, Kang Hu, Liujia Li, Yingwei Luo, Xiaolin Wang, Zhenlin Wang, Yuval Tamir, and Diyu Zhou ",
      highlightAuthor: "Yiming Yao",
      venue: "The 32nd Symposium on Operating Systems Principles (SOSP ‘26)",
      year: "",
      description: "",
      links: [
        { label: "paper", url: "https://dl.acm.org/doi/10.1145/3830418.3843863" },
      ]
    },
    {
      title: "SBB: Eliminating Centralized Bottlenecks in User-space Network Stack",
      authors: "Kang Hu, Shuqi Dong, Chuandong Li, Ran Yi, Zonghao Zhang, Yiming Yao, Bo An, Jie Zhang, Xiaolin Wang, Yingwei Luo, Zhenlin Wang, and Diyu Zhou ",
      highlightAuthor: "Yiming Yao",
      venue: "20th USENIX Symposium on Operating Systems Design and Implementation (OSDI ‘26)",
      year: "",
      description: "",
      links: [
        { label: "paper", url: "https://www.usenix.org/conference/osdi26/presentation/hu-kang" }
      ]
    },
    {
      title: "Criticality-Aware Instruction-Centric Bandwidth Partitioning for Data Center Applications",
      authors: "Liren Zhu, Liujia Li, Jianyu Wu, Yiming Yao, Zhan Shi, Jie Zhang, Zhenlin Wang, Xiaolin Wang, Yingwei Luo, and Diyu Zhou",
      highlightAuthor: "Yiming Yao",
      venue: "31st International Symposium on High-Performance Computer Architecture (HPCA ‘25)",
      year: "",
      description: "",
      links: [
        { label: "paper", url: "https://ieeexplore.ieee.org/document/10946736" },
      ]
    },
    {
      title: "Cachence: Fine-Grained Cache Partitioning in Both Time and Space",
      authors: "Liujia Li, Yuanlong Li, Yiming Yao, Jianyu Wu, Yi Fan, Jinhao Guo, Liren Zhu, Jie Zhang, Xiaolin Wang, Yingwei Luo, Zhenlin Wang, Diyu Zhou",
      highlightAuthor: "Yiming Yao",
      venue: "Design Automation Conference (DAC ‘26)",
      year: "",
      description: "",
      links: []
    },
    {
      title: "EKRM: Efficient Key-Value Retrieval Method to Reduce Data Lookup Overhead for Redis",
      authors: "Yiming Yao, Xiaolin Wang, Diyu Zhou, Liujia Li, Jianyu Wu, Liren Zhu, Zhenlin Wang, and Yingwei Luo",
      highlightAuthor: "Yiming Yao",
      venue: "30th International European Conference on Parallel and Distributed Computing (Euro-Par ‘24)",
      year: "",
      description: "",
      links: [
        { label: "paper", url: "https://dl.acm.org/doi/10.1007/978-3-031-69577-3_12" }
      ]
    }
  ],

  // 来源：https://pku-zlr.github.io/teaching/；课程简介按原意简要整理。
  // 条目格式：{ title, role, institution, year, description, url }
  // role 可填写课程类型（Graduate Course）或教学身份（Teaching Assistant）。
  teaching: [
    {
      title: "TA for Algorithm Analysis and Complexity Theory",
      role: "Graduate Course",
      institution: "Peking University, School of Computer Science",
      year: "2023",
      description: "A graduate course on designing and analysing algorithms, with an emphasis on applying core algorithmic techniques to practical problems. Students are expected to have an undergraduate foundation in algorithm design and analysis.",
      url: ""
    },
    {
      title: "TA for Introduction to Computation (B)",
      role: "Undergraduate course",
      institution: "Peking University",
      year: "2022",
      description: "An undergraduate course combining computation theory with introductory programming. It develops an understanding of program design principles and methods, alongside practical problem-solving skills.",
      url: ""
    }
  ],

  updated: ""         // 最后更新日期，例如 2026-10-12；留空时不显示
};
