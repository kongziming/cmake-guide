---
permalink: /others
---

# 其它问题

#### 1.怎样将Debug和Release编译进行区分。

##### a.在Debug模式下生成的名称后面加一个d

```cmake
set(CMAKE_DEBUG_POSTFIX d)
```

通过这个指令，生成的lib和dll文件名称都会有一个d后缀。但是生成的exe可能后面不会带d，需要加上下面这条指令：

```cmake
set_target_properties(${OUTPUT_NAME} PROPERTIES DEBUG_POSTFIX ${CMAKE_DEBUG_POSTFIX})
```



##### b.Debug和Release分别生成在指定不同目录下

比如debug编译后生成在文件夹D:/a下，release编译后生成在文件夹D:/b下。
暂无好的解决办法，可以通过生成后事件将文件拷过去。

#### 2.怎样将Debug和Release分别安装在不同文件夹下？

```cmake
install(TARGETS ${OUTPUT_NAME}
        CONFIGURATIONS Debug
        RUNTIME DESTINATION Debug/bin
        LIBRARY DESTINATION Debug/lib
        ARCHIVE DESTINATION Debug/lib)
install(TARGETS ${OUTPUT_NAME}
        CONFIGURATIONS Release
        RUNTIME DESTINATION Release/bin
        LIBRARY DESTINATION Release/lib
        ARCHIVE DESTINATION Release/lib)
```

