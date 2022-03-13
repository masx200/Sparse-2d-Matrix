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

支持 typescript,可以查看类型声明文件

[./src/index.ts](./src/index.ts)

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

2.常用函数

`MatrixCreate`,根据行数,列数,初始化函数来创建一个非对称二维稀疏矩阵

`MatrixSymmetryCreate`,根据行数,列数,初始化函数来创建一个对称的二维稀疏矩阵

`MatrixOfDiagonal`,创建一个对角矩阵

`isMatrixSymmetry`,判断是不是稀疏对称二维矩阵

`isMatrixRowColumn`,`isMatrixColumn`,`isMatrixRow`,判断矩阵是否是指定的行数和列数

`isMatrix`,判断是不是稀疏非对称二维矩阵

`MatrixAdd`,返回一系列矩阵的加法结果的新矩阵

`MatrixAssign`,用一个矩阵给另一个矩阵赋值

`MatrixMultiplication`,返回一系列矩阵的乘法结果的新矩阵

`MatrixMultiplyNumber`,返回矩阵和数字的乘法结果的新矩阵

`MatrixOfArrays`,从数组创建矩阵

`MatrixOfOnes`,创建全 1 矩阵

`MatrixReduce`,对每个矩阵中的每个元素执行一个由您提供的`reducer`函数(升序执行)，将其结果汇总为单个返回值放入新矩阵的对应位置,返回这个新矩阵

3.对象类型

`Matrix`:非对称二维稀疏矩阵

4.用例

查看更多示例

[./test/test-sparse-matrix.ts](./test/test-sparse-matrix.ts)

```js
MatrixEquals(
    MatrixOfArrays([
        [1, 0],
        [0, 1],
    ]),
    MatrixIdentity({ row: 2, column: 2 })
);
```

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
