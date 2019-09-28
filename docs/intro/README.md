## 简介

CMake 是一个跨平台的安装（编译）工具，允许开发者编写一种平台无关的 CMakeList.txt 文件来定制整个编译流程，然后再根据目标用户的平台进一步生成所需的本地化 Makefile 和工程文件，如 Unix 的 Makefile 或 Windows 的 Visual Studio 工程。从而做到“Write Once, Run Everywhere”。



## 优点

- 开源
- 跨平台，可生成本地化的编译配置文件，Linux/Unix平台生成makefile，mac上生成xcode，windows平台生成MSVC工程文件
- 便于管理项目，尤其是比较大的项目
- 简化构建和编译过程
- 高效率
- 可扩展，可以为cmake编写特定功能的模块，扩充cmke功能



