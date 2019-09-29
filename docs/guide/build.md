---
permalink: /build
---

# CMake构建工程

:::tip
在学习下面的CMake语句之前，请下载已经写好的例子[点我下载](/toturials.zip ':ignore')，结合例子中的程序学习。
:::

## 一、构建C++可执行程序(一)
:::tip

**提示：** 在这个例子中，所有文件都放在同一个文件目录下面。

:::
### 1.目录结构

```
toturial01  
│
│───SimpleCalculator.h
│───SimpleCalculator.cpp
│───main.cpp
└───CMakeLists.txt
```

**文件说明**：首先定义了一个类<mark>SimpleCalculator</mark>，能够进行简单的加减乘除计算。然后在*main*函数中创建该类的对象，输出2个数相加的结果。

### 2.编写CMakeLists.txt

```cmake
# 检查cmake的最低版本
cmake_minimum_required(VERSION 3.10.0)

# 定义工程名称
project(SimpleCalculator)

# 生成可执行程序
add_executable(SimpleCalculator
	SimpleCalculator.cpp
	main.cpp
)

# 输出消息
message("第一个CMake教程")
```

**语句说明**

1. `cmake_minimum_required`：检查CMake的最低版本，这里指定的最低版本为3.10.0。
2. `project`：定义工程的名称。在这个例子中，如果编译器用的是Visual Studio，那么生成的VS工程解决方案名称和工程名称相同，都是SimpleCalculator。
3. `add_executable`：构建可执行程序，后接名称+所需的源文件。windows平台下，会将源文件SimpleCalculator.cpp和main.cpp编译成名为SimpleCalculator.exe的可执行文件。
4. `message`：输出信息。后面有一个参数可以设置输出模式，具体请参考[message](https://cmake.org/cmake/help/latest/command/message.html)


### 3.构建工程

<img :src="$withBase('/1.gif')" alt="foo">

通过**cmake-gui**工具，**Configure**和**Generate**之后，即可生成VS工程。打开工程进行编译，得到SimpleCalculator.exe可执行文件。



## 二、构建C++可执行程序(二)

:::tip

**提示：** 上面的例子中，所有文件都是放在同一个文件夹下的。如果把头文件和源文件分开**放在不同文件夹**下，那么CMakeLists文件该怎么写呢？

:::

### 1.目录结构

```
toturial02  
│
│───headers
│   │
│   └───SimpleCalculator.h
│
│───sources
│   │
│   │───SimpleCalculator.cpp
│   └───main.cpp
│
└───CMakeLists.txt
```

将头文件放在headers文件夹下，源文件放在sources文件夹下。

### 2.编写CMakeLists.txt

```cmake
# 检查cmake的最低版本
cmake_minimum_required(VERSION 3.10.0)

# 定义工程名称
project(SimpleCalculator)

# 将源文件存进变量
set(TARGET_SOURCES
	sources/SimpleCalculator.cpp
	sources/main.cpp
)

# 包含头文件目录
include_directories(headers)

# 生成可执行程序
add_executable(${PROJECT_NAME}
	${TARGET_SOURCES}
)
```

**语句说明**

1. `set`：定义变量，后面用${}符号来引用该变量。在这个例子中，将源文件SimpleCalculator.cpp和main.cpp存进变量TARGET_SOURCES中，生成可执行文件时，使用${TARGET_SOURCES}引用该变量。
2. `include_directories`：包含头文件所在的目录，否则会在生成可执行程序时出现找不到头文件的错误。
3. `${PROJECT_NAME}`：在使用`project`定义工程名称之后，可以通过`${PROJECT_NAME}`来获取工程的名称，即SimpleCalculator。

构建现在的CMakeLists.txt，生成VS工程，编译生成可执行程序。

## 三、生成并使用C++动态库(一)

:::

**提示：** 现在我们将SimpleCalculator生成动态库，在main函数中通过引入动态库，输出2个数相加的结果。

:::

### 1.目录结构

```
toturial03  
│
│───SimpleCalculator
│   │
│   │───SimpleCalculator_exports.h
│   │───SimpleCalculator.h
│   │───SimpleCalculator.cpp
│   └───CMakeLists.txt
│
│───UseCalculator
│   │
│   │───main.cpp
│   └───CMakeLists.txt
│
└───CMakeLists.txt
```

因为windows平台生成动态库需要使用导出宏，所以添加了一个文件*SimpleCalculator_exports.h*用于将类导出。

### 2.编写CMakeLists

:::tip

**提示：** 现在有3个CMakeLists.txt文件，分别是根CMake文件，以及用于生成动态库、使用动态库生成可执行程序的CMake文件。

:::

根CMake文件

```cmake
# 检查cmake的最低版本
cmake_minimum_required(VERSION 3.10.0)

# 重新定义项目输出路径
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)

# 定义工程名称
project(CMakeToturial)

# 添加子目录
add_subdirectory(SimpleCalculator)
add_subdirectory(UseCalculator)
```

生成动态库的CMake文件

```cmake
# 定义工程名称
project(SimpleCalculator)

# 生成库
add_library(${PROJECT_NAME} SHARED
	SimpleCalculator.cpp
)

target_include_directories(${PROJECT_NAME}
	PUBLIC
	${PROJECT_SOURCE_DIR}
)
```

使用动态库的CMake文件

```cmake
# 设置输出名称
set(OUTPUT_NAME UseCalculator)

# 构建可执行程序
add_executable(${OUTPUT_NAME}
	main.cpp
)

# 链接目标所依赖的库
target_link_libraries(${OUTPUT_NAME}
	SimpleCalculator
)
```

**关键语句说明**

1. `add_subdirectory`：添加子目录。子目录下面必须有一个CMakeLists.txt文件。
2. `add_library`：生成库。后接名称、库类型、所需的源文件。如：add_library(Test SHARED hello.cpp)，其中`SHARED`表示构建动态库。
3. `target_include_directories`：生成目标文件所需的头文件目录，，需写在add_library后面。
4. `target_link_libraries`：生成可执行文件或库文件时，链接目标所依赖的库，需写在`add_library`或者`add_executable`的后面。

除了上面的几条语句，还有几句话用于重新定义项目的输出路径：

```
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)
```

这三条命令需要写在根CMakeLists.txt里面。



## 四、生成并使用C++动态库(二)

:::tip

**提示：** 上面生成动态库时，我们需要手写一个export文件，定义动态库的导出宏。从CMake3.4以后，CMake已经能够自动生成导出宏文件。

:::

### 1.目录结构

```cmake
toturial04  
│
│───SimpleCalculator
│   │
│   │───SimpleCalculator.h
│   │───SimpleCalculator.cpp
│   └───CMakeLists.txt
│
│───UseCalculator
│   │
│   │───main.cpp
│   └───CMakeLists.txt
│
└───CMakeLists.txt
```

从结构中可以看出，SimpleCalculator_export.h文件已经没有了。

### 2.编写CMakeLists

重新编写toturial04 - SimpleCalculator - CMakeLists.txt

```cmake
# 定义工程名称
project(SimpleCalculator)

# 生成库
add_library(${PROJECT_NAME} SHARED
	SimpleCalculator.cpp
)

# 生成导出宏文件
include(GenerateExportHeader)
generate_export_header(${PROJECT_NAME})

target_include_directories(${PROJECT_NAME}
	PUBLIC
	${PROJECT_SOURCE_DIR}
	${CMAKE_CURRENT_BINARY_DIR}		# 生成的导出宏文件在该路径下
)
```

从中可以看出，新增了2条语句：

```cmake
include(GenerateExportHeader)
generate_export_header(${PROJECT_NAME})
```

使用这两条语句，将会自动生成导出宏文件，不需要自己手动写了。

可以通过`generate_export_header`的参数，对宏的名称作修改，详细请参考：[参考1-官方文档](https://cmake.org/cmake/help/v3.6/module/GenerateExportHeader.html?highlight=generate_export_header)、[参考2](https://blog.kitware.com/create-dlls-on-windows-without-declspec-using-new-cmake-export-all-feature/)。

## 五、构建Qt可执行程序

### 1.目录结构

```
toturial05  
│
│───SimpleButton.h
│───SimpleButton.cpp
│───SimpleWidget.h
│───SimpleWidget.cpp
│───SimpleWidget.ui
│───SimpleWidget.css
│───SimpleWidget.qrc
└───CMakeLists.txt
```

文件说明：SimpleButton是继承QPushButton的自定义按钮。在SimpleWidget创建一个SimpleButton并显示在界面上。

### 2.编写CMakeLists

```cmake
cmake_minimum_required(VERSION 3.10.0)

project(SimpleWidget)

find_package(Qt5 REQUIRED Core Gui Widgets)

set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTOUIC ON)
set(CMAKE_AUTORCC ON)

set(TARGET_HEADERS
	SimpleWidget.h
)
set(TARGET_SOURCES
	SimpleButton.cpp
	SimpleWidget.cpp
	main.cpp
)
set(TARGET_FORMS
	SimpleWidget.ui
)
set(TARGET_RESOURCES
	SimpleWidget.qrc
)

add_executable(${PROJECT_NAME}
	${TARGET_SOURCES}
	${TARGET_RESOURCES}
)
target_link_libraries(${PROJECT_NAME}
	Qt5::Core
	Qt5::Gui
	Qt5::Widgets
)
```

**关键语句说明**

- `find_package`：搜索库。因为Qt程序需要使用到Qt的库，而CMake一开始不知道Qt的库在哪，具体搜索的规则如下：

cmake本身不提供任何搜索库的便捷方法，所有搜索库并给变量赋值的操作必须由cmake代码完成，比如下面提到的FindXXX.cmake和XXXConfig.cmake。只不过，库的作者通常会提供这两个文件，以方便使用者调用。

find_package采用两种模式搜索库：
Module模式：搜索CMAKE_MODULE_PATH指定路径下的FindXXX.cmake文件，执行该文件从而找到XXX库。其中，具体查找库并给XXX_INCLUDE_DIRS和XXX_LIBRARIES两个变量赋值的操作由FindXXX.cmake模块完成。

Config模式：搜索XXX_DIR指定路径下的XXXConfig.cmake文件，执行该文件从而找到XXX库。其中具体查找库并给XXX_INCLUDE_DIRS和XXX_LIBRARIES两个变量赋值的操作由XXXConfig.cmake模块完成。

比如，在C:\Qt\Qt5.9.3\5.9.3\msvc2015\lib\cmake\Qt5下找到Qt5Config.cmake便可配置Qt的库。

- 自动处理`moc`、`uic`、`rcc`

```cmake
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTOUIC ON)
set(CMAKE_AUTORCC ON)
```

在Qt中，除了有头文件以及源文件，还有ui文件、qrc文件等，在编译过程中，需要将继承QObject的类文件进行moc处理，对界面ui文件进行uic处理，对资源文件qrc进行rcc处理。添加上面的3句话，即可使cmake自动进行处理生成相应的文件。

## 六、生成并使用Qt动态库

通过学习生成C++动态库，以及构建Qt可执行程序，生成和使用Qt的动态库也就十分简单了。这里不再赘述，可参考例子toturial06。

## 七、安装

cmake通过install指令进行安装。可以将目标文件或者普通文件安装到指定的目录下。

```cmake
install(TARGETS ${PROJECT_NAME}
	RUNTIME DESTINATION bin
	LIBRARY DESTINATION lib
	ARCHIVE DESTINATION lib)

install(FILES ${PROJECT_SOURCE_DIR}/SimpleButton.h
	DESTINATION include)
```

## 八、其它语句

1. `FILE`(GLOB variable [RELATIVE path] [globbing expressions] ... )：查找收集文件，比如`FILE`(GLOB TARGET_HEADERS public/*.h)，将public文件夹下所有.h文件保存到变量TARGET_HEADERS中。
2. set(`CMAKE_PREFIX_PATH` "C:/Qt/Qt5.9.3/5.9.3/msvc2015_64")：可以设置Qt的路径。
3. set(`CMAKE_CXX_STANDARD` 11)：设置C++标准为C++11