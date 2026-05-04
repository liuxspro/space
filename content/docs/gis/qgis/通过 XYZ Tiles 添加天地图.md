---
title: 通过 XYZ Tiles 添加天地图
date: 2023-08-16T11:26:48+08:00
tags:
  - QGIS
  - 天地图
---


# 通过 XYZ Tiles 添加天地图

通过 XYZ Tiles 添加天地图时，使用以下链接：

```text
http://t0.tianditu.gov.cn/img_w/wmts?service=wmts
&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w
&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=<自己申请的key>
```

或者:

```text
https://t6.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=<自己申请的key>
```

由于**有段时间**天地图启用了防盗链，需验证 Referer 才能正常返回瓦片，否则会提示攻击。

解决方法：在 XYZ Tiles 设置中，将 Referer 栏（常译为“引用”或“来源”）填写为 `https://www.tianditu.gov.cn` 即可正常加载。

![天地图 XYZ Tiles](/images/tianditu/xyz.png)

---

参考资料:

1. [通过QGIS XYZ Tiles访问国内四大图商地图服务](https://mp.weixin.qq.com/s/V4yI1yqzGSR1M8oqEn0wbA)
2. [QGIS文章一 —— 实现天地图加载](https://mp.weixin.qq.com/s/6ZUnTNYftIkPDGpV7UxXgA)
