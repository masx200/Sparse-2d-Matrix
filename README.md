# sparse-2d-matrix

#### 介绍

sparse-2d-matrix

实验性的稀疏二维矩阵,实现和一些工具函数,对称矩阵,加减乘除,单位矩阵...

#### 软件架构

软件架构说明

#### 安装教程

1.  安装

```
yarn add "@masx200/sparse-2d-matrix"
```

#### 使用说明

1.导入

```js
import {
    MatrixEquals,
    MatrixCreate,
    MatrixAdd,
    MatrixOfOnes,
    MatrixOfArrays,
    MatrixToArrays,
    MatrixOfDiagonal,
    MatrixMultiplication,
} from "@masx200/sparse-2d-matrix";
```

2.用例

```js
MatrixEquals(
    MatrixMultiplication(
        MatrixOfArrays([
            [1, 2],
            [3, 4],
        ]),
        MatrixOfArrays([
            [1, 2],
            [3, 4],
        ])
    ),
    MatrixOfArrays([
        [7, 10],
        [15, 22],
    ])
);
```

```js
MatrixEquals(
    MatrixOfArrays([
        [1, 1, 1],
        [1, 1, 1],
    ]),
    MatrixOfOnes({ row: 2, column: 3 })
);
```

```js
MatrixEquals(
    MatrixOfArrays([
        [3, 0],
        [0, 6],
    ]),
    MatrixOfDiagonal([3, 6])
);
```

```js
6 ===
    MatrixTrace(
        MatrixOfArrays([
            [3, 3],
            [3, 3],
        ])
    );
```

```js
isEqual(
    [3, 6],
    MatrixGetDiagonal(
        MatrixOfArrays([
            [3, 3],
            [3, 6],
        ])
    )
);
```

```js
isEqual(
    [
        [4, 4],
        [4, 4],
    ],
    MatrixToArrays(
        MatrixAdd(
            MatrixOfArrays([
                [1, 0],
                [0, 1],
            ]),
            MatrixCreate({
                row: 2,
                column: 2,
                initializer: () => 3,
            }),
            MatrixOfArrays([
                [0, 1],
                [1, 0],
            ])
        )
    )
);
```

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request
