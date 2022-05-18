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

[./src/index.ts](https://gitee.com/masx200/Sparse-2d-Matrix/blob/master/src/index.ts)

1.导入

```js
import {
    MatrixOfDiagonal,
    isMatrixSymmetry,
    isMatrixRowColumn,
    isMatrix,
    isMatrixColumn,
    isMatrixRow,
    Matrix,
    MatrixAdd,
    MatrixAssign,
    MatrixMultiplication,
    MatrixMultiplyNumber,
    MatrixOfArrays,
    MatrixOfOnes,
    MatrixReduceSeries,
    MatrixSome,
    MatrixMap,
    MatrixForEach,
    MatrixReduceSingle,
    MatrixFrom,
    MatrixGetColumn,
    MatrixGetRow,
    MatrixSubtract,
    MatrixIdentity,
    MatrixSymmetry,
    MatrixSymmetryCreate,
    MatrixEquals,
    MatrixEvery,
    MatrixFill,
    MatrixMax,
    MatrixMin,
    MatrixSymmetryOptions,
    MatrixToArrays,
    MatrixCreate,
    MatrixOptions,
    MatrixTranspose,
    MatrixOfZeros,
    MatrixGetDiagonal,
    MatrixTrace,
    assertMatrixColumn,
    assertMatrixRow,
    assertMatrixRowColumn,
} from "@masx200/sparse-2d-matrix";
```

2.常用函数

`MatrixCreate`,根据行数,列数,初始化函数来创建一个非对称二维稀疏矩阵

`MatrixSymmetryCreate`,根据行数,列数,初始化函数来创建一个对称的二维稀疏矩阵

`MatrixOfDiagonal`,创建一个对角矩阵.

`isMatrixSymmetry`,判断是不是稀疏对称二维矩阵

`isMatrixRowColumn`,`isMatrixColumn`,`isMatrixRow`,判断矩阵是否是指定的行数和列数

`assertMatrixColumn`,`assertMatrixRow`,`assertMatrixRowColumn`,断言矩阵是否是指定的行数和列数

`isMatrix`,判断是不是稀疏非对称二维矩阵

`MatrixAdd`,返回一系列矩阵的加法结果的新矩阵

`MatrixAssign`,用一个矩阵给另一个矩阵赋值

`MatrixMultiplication`,返回一系列矩阵的乘法结果的新矩阵

`MatrixMultiplyNumber`,返回矩阵和数字的乘法结果的新矩阵

`MatrixOfArrays`,从数组表示创建矩阵.

`MatrixOfOnes`,创建全 1 矩阵

`MatrixReduceSeries`,创建一个新矩阵,这个矩阵的每个元素由输入的每个矩阵对应位置的元素的由您提供的`reducer`函数(升序执行)生成,返回这个新矩阵.

`MatrixSome`,测试在矩阵中是不是至少有 1 个元素通过了被提供的函数测试。它返回的是一个`Boolean`类型的值.

`MatrixMap`,创建一个新矩阵，其结果是该矩阵中的每个元素是调用一次提供的函数后的返回值的新矩阵.

`MatrixForEach`,对矩阵的每个元素执行一次给定的函数。

`MatrixReduceSingle`,对一个矩阵中的每个元素执行一个由您提供的`reducer`函数(升序执行)，将其结果汇总为单个返回值.

`MatrixFrom`,返回对一个矩阵克隆得到新矩阵.

`MatrixGetColumn`,返回矩阵中的某一列.

`MatrixGetRow`,返回矩阵中的某一行.

`MatrixSubtract`,返回第一个矩阵减去第二个矩阵的结果的新矩阵.

`MatrixIdentity`,创建一个单位矩阵,可以不是方阵

`MatrixEquals`,判断一系列矩阵是否全部相等

`MatrixEvery`,测试在矩阵中是不是全部元素通过了被提供的函数测试。它返回的是一个`Boolean`类型的值.

`MatrixFill`,使用输入的数值填充矩阵的每个元素.

`MatrixMax`,创建一个新矩阵,这个矩阵的每个元素由输入的每个矩阵对应位置的中最大值生成,返回这个新矩阵.

`MatrixMin`,创建一个新矩阵,这个矩阵的每个元素由输入的每个矩阵对应位置的中最小值生成,返回这个新矩阵.

`MatrixToArrays`,把矩阵转化为数组表示.

`MatrixTranspose`,获得矩阵的转置矩阵.

`MatrixOfZeros`,创建全 0 矩阵

`MatrixGetDiagonal`,获得矩阵的对角线元素.

`MatrixTrace`,获得矩阵的对角线元素之和.

3.对象类型

`Matrix`:非对称二维稀疏矩阵

`MatrixSymmetry`:对称二维稀疏矩阵

矩阵对象类型通用属性和方法:

`values`:返回矩阵中所有元素组成的数组.

`keys`:返回矩阵中所有行与列组成的数组.

`entries`:返回矩阵中所有行与列与对应元素组成的数组.

`get`:返回矩阵中特定行与列的对应元素,不可以输入负数.

`at`:返回矩阵中特定行与列的对应元素,可以输入负数.

`set`:修改矩阵中特定行与列的对应元素,不可以输入负数.

`has`:判断矩阵中特定行与列的元素是否存在.

`row`,矩阵的总行数

`column`,矩阵的总行数

`toJSON`,把矩阵转化为数组表示

`[Symbol.iterator]`,把矩阵转化为数组表示的迭代器

`forEach`:对矩阵的每个元素执行一次给定的函数。

4.接口

`MatrixOptions`,创建矩阵的参数对象拥有以下参数

`row`,矩阵的行数

`column`,矩阵的总行数

`initializer`,矩阵的初始化函数

5.用例

查看更多示例

[./test/test-sparse-matrix.ts](https://gitee.com/masx200/Sparse-2d-Matrix/blob/master/test/test-sparse-matrix.ts)

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

# changelog

2022 年 4 月 2 日 13:11:16

解决`Map maximum size exceeded`最大为 `16777216`的问题.

可以处理行列乘积大小超过`16777216`的矩阵,

但是行数和列数都不能超过`16777216`.

2022 年 5 月 18 日 22:28:25

对称矩阵使用 `Float64Array` 压缩存储,速度比用哈希映射快很多.
