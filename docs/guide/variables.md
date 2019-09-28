---
permalink: /variables
---

# 常用变量

- PROJECT_NAME： 返回通过PROJECT指令定义的项目名称
- CMAKE_BINARY_DIR、PROJECT_BINARY_DIR：工程编译发生的目录
- CMAKE_SOURCE_DIR、PROJECT_SOURCE_DIR：工程顶级目录
- CMAKE_CURRENT_SOURCE_DIR：当前处理的CMakeLists.txt所在目录
- CMAKE_CURRENT_BINARY_DIR：编译目录
- $ENV{NAME}： 调用系统环境变量，比如$ENV{HOME}
- SET( ENV{变量名} 值 )： 设置环境变量
- UNIX： 所有的UNIX平台为TRUE
- WIN32： 所有的win32平台为TRUE