(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{209:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cmake构建工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cmake构建工程","aria-hidden":"true"}},[t._v("#")]),t._v(" CMake构建工程")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("在学习下面的CMake语句之前，请下载已经写好的例子"),s("a",{attrs:{href:"/toturials.zip",title:":ignore"}},[t._v("点我下载")]),t._v("，结合例子中的程序学习。")])]),t._v(" "),s("h2",{attrs:{id:"一、构建c-可执行程序-一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、构建c-可执行程序-一","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、构建C++可执行程序(一)")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[s("strong",[t._v("提示：")]),t._v(" 在这个例子中，所有文件都放在同一个文件目录下面。")])]),t._v(" "),s("h3",{attrs:{id:"_1-目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-目录结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.目录结构")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("toturial01  \n│\n│───SimpleCalculator.h\n│───SimpleCalculator.cpp\n│───main.cpp\n└───CMakeLists.txt\n")])])]),s("p",[s("strong",[t._v("文件说明")]),t._v("：首先定义了一个类"),s("mark",[t._v("SimpleCalculator")]),t._v("，能够进行简单的加减乘除计算。然后在"),s("em",[t._v("main")]),t._v("函数中创建该类的对象，输出2个数相加的结果。")]),t._v(" "),s("h3",{attrs:{id:"_2-编写cmakelists-txt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-编写cmakelists-txt","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.编写CMakeLists.txt")]),t._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查cmake的最低版本")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("cmake_minimum_required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("VERSION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.10.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义工程名称")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SimpleCalculator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成可执行程序")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_executable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SimpleCalculator\n\tSimpleCalculator.cpp\n\tmain.cpp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出消息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"第一个CMake教程"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("语句说明")])]),t._v(" "),s("ol",[s("li",[s("code",[t._v("cmake_minimum_required")]),t._v("：检查CMake的最低版本，这里指定的最低版本为3.10.0。")]),t._v(" "),s("li",[s("code",[t._v("project")]),t._v("：定义工程的名称。在这个例子中，如果编译器用的是Visual Studio，那么生成的VS工程解决方案名称和工程名称相同，都是SimpleCalculator。")]),t._v(" "),s("li",[s("code",[t._v("add_executable")]),t._v("：构建可执行程序，后接名称+所需的源文件。windows平台下，会将源文件SimpleCalculator.cpp和main.cpp编译成名为SimpleCalculator.exe的可执行文件。")]),t._v(" "),s("li",[s("code",[t._v("message")]),t._v("：输出信息。后面有一个参数可以设置输出模式，具体请参考"),s("a",{attrs:{href:"https://cmake.org/cmake/help/latest/command/message.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("message"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_3-构建工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-构建工程","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.构建工程")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/1.gif"),alt:"foo"}}),t._v(" "),s("p",[t._v("通过"),s("strong",[t._v("cmake-gui")]),t._v("工具，"),s("strong",[t._v("Configure")]),t._v("和"),s("strong",[t._v("Generate")]),t._v("之后，即可生成VS工程。打开工程进行编译，得到SimpleCalculator.exe可执行文件。")]),t._v(" "),s("h2",{attrs:{id:"二、构建c-可执行程序-二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、构建c-可执行程序-二","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、构建C++可执行程序(二)")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[s("strong",[t._v("提示：")]),t._v(" 上面的例子中，所有文件都是放在同一个文件夹下的。如果把头文件和源文件分开"),s("strong",[t._v("放在不同文件夹")]),t._v("下，那么CMakeLists文件该怎么写呢？")])]),t._v(" "),s("h3",{attrs:{id:"_1-目录结构-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-目录结构-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.目录结构")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("toturial02  \n│\n│───headers\n│   │\n│   └───SimpleCalculator.h\n│\n│───sources\n│   │\n│   │───SimpleCalculator.cpp\n│   └───main.cpp\n│\n└───CMakeLists.txt\n")])])]),s("p",[t._v("将头文件放在headers文件夹下，源文件放在sources文件夹下。")]),t._v(" "),s("h3",{attrs:{id:"_2-编写cmakelists-txt-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-编写cmakelists-txt-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.编写CMakeLists.txt")]),t._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查cmake的最低版本")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("cmake_minimum_required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("VERSION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.10.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义工程名称")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SimpleCalculator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将源文件存进变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TARGET_SOURCES\n\tsources/SimpleCalculator.cpp\n\tsources/main.cpp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 包含头文件目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include_directories")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成可执行程序")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_executable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),t._v("TARGET_SOURCES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("语句说明")])]),t._v(" "),s("ol",[s("li",[s("code",[t._v("set")]),t._v("：定义变量，后面用${}符号来引用该变量。在这个例子中，将源文件SimpleCalculator.cpp和main.cpp存进变量TARGET_SOURCES中，生成可执行文件时，使用${TARGET_SOURCES}引用该变量。")]),t._v(" "),s("li",[s("code",[t._v("include_directories")]),t._v("：包含头文件所在的目录，否则会在生成可执行程序时出现找不到头文件的错误。")]),t._v(" "),s("li",[s("code",[t._v("${PROJECT_NAME}")]),t._v("：在使用"),s("code",[t._v("project")]),t._v("定义工程名称之后，可以通过"),s("code",[t._v("${PROJECT_NAME}")]),t._v("来获取工程的名称，即SimpleCalculator。")])]),t._v(" "),s("p",[t._v("构建现在的CMakeLists.txt，生成VS工程，编译生成可执行程序。")]),t._v(" "),s("h2",{attrs:{id:"三、生成并使用c-动态库-一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、生成并使用c-动态库-一","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、生成并使用C++动态库(一)")]),t._v(" "),s("p",[t._v(":::")]),t._v(" "),s("p",[s("strong",[t._v("提示：")]),t._v(" 现在我们将SimpleCalculator生成动态库，在main函数中通过引入动态库，输出2个数相加的结果。")]),t._v(" "),s("p",[t._v(":::")]),t._v(" "),s("h3",{attrs:{id:"_1-目录结构-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-目录结构-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.目录结构")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("toturial03  \n│\n│───SimpleCalculator\n│   │\n│   │───SimpleCalculator_exports.h\n│   │───SimpleCalculator.h\n│   │───SimpleCalculator.cpp\n│   └───CMakeLists.txt\n│\n│───UseCalculator\n│   │\n│   │───main.cpp\n│   └───CMakeLists.txt\n│\n└───CMakeLists.txt\n")])])]),s("p",[t._v("因为windows平台生成动态库需要使用导出宏，所以添加了一个文件"),s("em",[t._v("SimpleCalculator_exports.h")]),t._v("用于将类导出。")]),t._v(" "),s("h3",{attrs:{id:"_2-编写cmakelists"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-编写cmakelists","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.编写CMakeLists")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[s("strong",[t._v("提示：")]),t._v(" 现在有3个CMakeLists.txt文件，分别是根CMake文件，以及用于生成动态库、使用动态库生成可执行程序的CMake文件。")])]),t._v(" "),s("p",[t._v("根CMake文件")]),t._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查cmake的最低版本")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("cmake_minimum_required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("VERSION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.10.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重新定义项目输出路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_ARCHIVE_OUTPUT_DIRECTORY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_BINARY_DIR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/lib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_LIBRARY_OUTPUT_DIRECTORY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_BINARY_DIR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/lib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_RUNTIME_OUTPUT_DIRECTORY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_BINARY_DIR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义工程名称")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CMakeToturial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加子目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_subdirectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SimpleCalculator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_subdirectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UseCalculator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("生成动态库的CMake文件")]),t._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义工程名称")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SimpleCalculator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_library")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("SHARED")]),t._v("\n\tSimpleCalculator.cpp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("target_include_directories")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("PUBLIC")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("PROJECT_SOURCE_DIR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("使用动态库的CMake文件")]),t._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置输出名称")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("OUTPUT_NAME")]),t._v(" UseCalculator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建可执行程序")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_executable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("OUTPUT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tmain.cpp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 链接目标所依赖的库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("target_link_libraries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("OUTPUT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tSimpleCalculator\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("关键语句说明")])]),t._v(" "),s("ol",[s("li",[s("code",[t._v("add_subdirectory")]),t._v("：添加子目录。子目录下面必须有一个CMakeLists.txt文件。")]),t._v(" "),s("li",[s("code",[t._v("add_library")]),t._v("：生成库。后接名称、库类型、所需的源文件。如：add_library(Test SHARED hello.cpp)，其中"),s("code",[t._v("SHARED")]),t._v("表示构建动态库。")]),t._v(" "),s("li",[s("code",[t._v("target_include_directories")]),t._v("：生成目标文件所需的头文件目录，，需写在add_library后面。")]),t._v(" "),s("li",[s("code",[t._v("target_link_libraries")]),t._v("：生成可执行文件或库文件时，链接目标所依赖的库，需写在"),s("code",[t._v("add_library")]),t._v("或者"),s("code",[t._v("add_executable")]),t._v("的后面。")])]),t._v(" "),s("p",[t._v("除了上面的几条语句，还有几句话用于重新定义项目的输出路径：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)\nset(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)\nset(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)\n")])])]),s("p",[t._v("这三条命令需要写在根CMakeLists.txt里面。")]),t._v(" "),s("h2",{attrs:{id:"四、生成并使用c-动态库-二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、生成并使用c-动态库-二","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、生成并使用C++动态库(二)")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[s("strong",[t._v("提示：")]),t._v(" 上面生成动态库时，我们需要手写一个export文件，定义动态库的导出宏。从CMake3.4以后，CMake已经能够自动生成导出宏文件。")])]),t._v(" "),s("h3",{attrs:{id:"_1-目录结构-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-目录结构-4","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.目录结构")]),t._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[t._v("toturial04  \n│\n│───SimpleCalculator\n│   │\n│   │───SimpleCalculator.h\n│   │───SimpleCalculator.cpp\n│   └───CMakeLists.txt\n│\n│───UseCalculator\n│   │\n│   │───main.cpp\n│   └───CMakeLists.txt\n│\n└───CMakeLists.txt\n")])])]),s("p",[t._v("从结构中可以看出，SimpleCalculator_export.h文件已经没有了。")]),t._v(" "),s("h3",{attrs:{id:"_2-编写cmakelists-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-编写cmakelists-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.编写CMakeLists")]),t._v(" "),s("p",[t._v("重新编写toturial04 - SimpleCalculator - CMakeLists.txt")]),t._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义工程名称")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SimpleCalculator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_library")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("SHARED")]),t._v("\n\tSimpleCalculator.cpp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成导出宏文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GenerateExportHeader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate_export_header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("target_include_directories")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("PUBLIC")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("PROJECT_SOURCE_DIR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_CURRENT_BINARY_DIR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成的导出宏文件在该路径下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("从中可以看出，新增了2条语句：")]),t._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GenerateExportHeader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate_export_header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("使用这两条语句，将会自动生成导出宏文件，不需要自己手动写了。")]),t._v(" "),s("p",[t._v("可以通过"),s("code",[t._v("generate_export_header")]),t._v("的参数，对宏的名称作修改，详细请参考："),s("a",{attrs:{href:"https://cmake.org/cmake/help/v3.6/module/GenerateExportHeader.html?highlight=generate_export_header",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考1-官方文档"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://blog.kitware.com/create-dlls-on-windows-without-declspec-using-new-cmake-export-all-feature/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考2"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"五、构建qt可执行程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、构建qt可执行程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 五、构建Qt可执行程序")]),t._v(" "),s("h3",{attrs:{id:"_1-目录结构-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-目录结构-5","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.目录结构")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("toturial05  \n│\n│───SimpleButton.h\n│───SimpleButton.cpp\n│───SimpleWidget.h\n│───SimpleWidget.cpp\n│───SimpleWidget.ui\n│───SimpleWidget.css\n│───SimpleWidget.qrc\n└───CMakeLists.txt\n")])])]),s("p",[t._v("文件说明：SimpleButton是继承QPushButton的自定义按钮。在SimpleWidget创建一个SimpleButton并显示在界面上。")]),t._v(" "),s("h3",{attrs:{id:"_2-编写cmakelists-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-编写cmakelists-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.编写CMakeLists")]),t._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("cmake_minimum_required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("VERSION")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.10.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("project")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SimpleWidget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("find_package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Qt5 REQUIRED Core Gui Widgets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_AUTOMOC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("ON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_AUTOUIC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("ON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_AUTORCC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("ON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TARGET_HEADERS\n\tSimpleWidget.h\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TARGET_SOURCES\n\tSimpleButton.cpp\n\tSimpleWidget.cpp\n\tmain.cpp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TARGET_FORMS\n\tSimpleWidget.ui\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TARGET_RESOURCES\n\tSimpleWidget.qrc\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_executable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),t._v("TARGET_SOURCES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),t._v("TARGET_RESOURCES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("target_link_libraries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token inserted class-name"}},[t._v("Qt5::Core")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token inserted class-name"}},[t._v("Qt5::Gui")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token inserted class-name"}},[t._v("Qt5::Widgets")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("关键语句说明")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("find_package")]),t._v("：搜索库。因为Qt程序需要使用到Qt的库，而CMake一开始不知道Qt的库在哪，具体搜索的规则如下：")])]),t._v(" "),s("p",[t._v("cmake本身不提供任何搜索库的便捷方法，所有搜索库并给变量赋值的操作必须由cmake代码完成，比如下面提到的FindXXX.cmake和XXXConfig.cmake。只不过，库的作者通常会提供这两个文件，以方便使用者调用。")]),t._v(" "),s("p",[t._v("find_package采用两种模式搜索库：\nModule模式：搜索CMAKE_MODULE_PATH指定路径下的FindXXX.cmake文件，执行该文件从而找到XXX库。其中，具体查找库并给XXX_INCLUDE_DIRS和XXX_LIBRARIES两个变量赋值的操作由FindXXX.cmake模块完成。")]),t._v(" "),s("p",[t._v("Config模式：搜索XXX_DIR指定路径下的XXXConfig.cmake文件，执行该文件从而找到XXX库。其中具体查找库并给XXX_INCLUDE_DIRS和XXX_LIBRARIES两个变量赋值的操作由XXXConfig.cmake模块完成。")]),t._v(" "),s("p",[t._v("比如，在C:\\Qt\\Qt5.9.3\\5.9.3\\msvc2015\\lib\\cmake\\Qt5下找到Qt5Config.cmake便可配置Qt的库。")]),t._v(" "),s("ul",[s("li",[t._v("自动处理"),s("code",[t._v("moc")]),t._v("、"),s("code",[t._v("uic")]),t._v("、"),s("code",[t._v("rcc")])])]),t._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_AUTOMOC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("ON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_AUTOUIC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("ON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("CMAKE_AUTORCC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("ON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("在Qt中，除了有头文件以及源文件，还有ui文件、qrc文件等，在编译过程中，需要将继承QObject的类文件进行moc处理，对界面ui文件进行uic处理，对资源文件qrc进行rcc处理。添加上面的3句话，即可使cmake自动进行处理生成相应的文件。")]),t._v(" "),s("h2",{attrs:{id:"六、生成并使用qt动态库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、生成并使用qt动态库","aria-hidden":"true"}},[t._v("#")]),t._v(" 六、生成并使用Qt动态库")]),t._v(" "),s("p",[t._v("通过学习生成C++动态库，以及构建Qt可执行程序，生成和使用Qt的动态库也就十分简单了。这里不再赘述，可参考例子toturial06。")]),t._v(" "),s("h2",{attrs:{id:"七、安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 七、安装")]),t._v(" "),s("p",[t._v("cmake通过install指令进行安装。可以将目标文件或者普通文件安装到指定的目录下。")]),t._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("install")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TARGETS "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("PROJECT_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tRUNTIME DESTINATION bin\n\tLIBRARY DESTINATION lib\n\tARCHIVE DESTINATION lib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("install")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FILES "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("PROJECT_SOURCE_DIR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/SimpleButton.h\n\tDESTINATION include"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"八、其它语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、其它语句","aria-hidden":"true"}},[t._v("#")]),t._v(" 八、其它语句")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("FILE")]),t._v("(GLOB variable [RELATIVE path] [globbing expressions] ... )：查找收集文件，比如"),s("code",[t._v("FILE")]),t._v("(GLOB TARGET_HEADERS public/*.h)，将public文件夹下所有.h文件保存到变量TARGET_HEADERS中。")]),t._v(" "),s("li",[t._v("set("),s("code",[t._v("CMAKE_PREFIX_PATH")]),t._v(' "C:/Qt/Qt5.9.3/5.9.3/msvc2015_64")：可以设置Qt的路径。')]),t._v(" "),s("li",[t._v("set("),s("code",[t._v("CMAKE_CXX_STANDARD")]),t._v(" 11)：设置C++标准为C++11")])])])}),[],!1,null,null,null);a.default=n.exports}}]);