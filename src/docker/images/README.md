## 1.使用Docker镜像

- Docker 运行容器前需要本地存在对应的镜像，如果本地不存在该镜像，Docker 会从镜像仓库下载该镜像。

- 本章将介绍更多关于镜像的内容，包括：
    - 从仓库获取镜像；
    - 管理本地主机上的镜像；
    - 介绍镜像实现的基本原理。

## 2.获取镜像

- 从 Docker 镜像仓库获取镜像的命令是 docker pull。其命令格式为：

```docker
$ docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签]
```

具体的选项可以通过 docker pull --help 命令看到，这里我们说一下镜像名称的格式。

## 3.列出镜像

## 4.删除本地镜像

## 5.利用commit理解镜像构成

## 6.其他制作镜像的方式

## 7.镜像的实现原理
