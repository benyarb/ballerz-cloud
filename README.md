
# Unofficial Ballerz API

Basic URL:
`https://ballerz.cloud/images/ballerz/7562/public`

URL with params:
`https://ballerz.cloud/images/ballerz/7562/background=red,rotate=180,sharpen=2,trim=50;60;100;90`


## Params

#### `background`

Background color to add underneath the image. Applies to images with transparency (for example, PNG) and images resized with `fit=pad`. Accepts any CSS color, such as `#RRGGBB` and `rgba(…)`. Example:

```js
background=%23RRGGBB

OR

background=red
```


#### `blur`

Blur radius between `1` (slight blur) and `250` (maximum). Be aware that you cannot use this option to reliably obscure image content, because savvy users can modify an image's URL and remove the blur option. Example:

```js
blur=50
```


#### `brightness`

Increase brightness by a factor. A value of `1.0` equals no change, a value of `0.5` equals half brightness, and a value of `2.0` equals twice as bright. `0` is ignored. Example:

```js
brightness=0.5
```


#### `contrast`

Increase contrast by a factor. A value of `1.0` equals no change, a value of `0.5` equals low contrast, and a value of `2.0` equals high contrast. `0` is ignored. Example:

```js
contrast=0.5
```

#### `dpr`

Device Pixel Ratio. Default is `1`. Multiplier for `width`/`height` that makes it easier to specify higher-DPI sizes in `<img srcset>`. Example:

```js
dpr=1
```


#### `fit`

Affects interpretation of `width` and `height`. All resizing modes preserve aspect ratio. Available modes are:

  - `scale-down`  
  Similar to `contain`, but the image is never enlarged. If the image is larger than given `width` or `height`, it will be resized. Otherwise its original size will be kept. Example:

  ```js
  fit=scale-down
  ```

  - `contain`  
  Image will be resized (shrunk or enlarged) to be as large as possible within the given `width` or `height` while preserving the aspect ratio. If you only provide a single dimension (for example, only `width`), the image will be shrunk or enlarged to exactly match that dimension. Example:

  ```js
  fit=contain
  ```


  - `cover`  
  Resizes (shrinks or enlarges) to fill the entire area of `width` and `height`. If the image has an aspect ratio different from the ratio of `width` and `height`, it will be cropped to fit. Example:

  ```js
  fit=cover
  ```


  - `crop`  
  Image will be shrunk and cropped to fit within the area specified by `width` and `height`. The image will not be enlarged. For images smaller than the given dimensions, it is the same as `scale-down`. For images larger than the given dimensions, it is the same as `cover`. See also [`trim`](#trim). Example:

  ```js
  fit=crop
  ```


  - `pad`  
  Resizes to the maximum size that fits within the given `width` and `height`, and then fills the remaining area with a `background` color (white by default). This mode is not recommended, since you can achieve the same effect more efficiently with the `contain` mode and the CSS `object-fit: contain` property. Example:

  ```js
  fit=pad
  ```

#### `gamma`

Increase exposure by a factor. A value of `1.0` equals no change, a value of `0.5` darkens the image, and a value of `2.0` lightens the image. `0` is ignored. Example:

```js
gamma=0.5
```


#### `gravity`

When cropping with `fit: "cover"` and `fit: "crop"`, this parameter defines the side or point that should not be cropped. Available options are:

  - `auto`  
  Selects focal point based on saliency detection (using maximum symmetric surround algorithm). Example:

  ```js
  gravity=auto
  ```


  - `side`  
  A side (`"left"`, `"right"`, `"top"`, `"bottom"`) or coordinates specified on a scale from `0.0` (top or left) to `1.0` (bottom or right), `0.5` being the center. The X and Y coordinates are separated by lowercase `x` in the URL format. For example, `0x1` means left and bottom, `0.5x0.5` is the center, `0.5x0.33` is a point in the top third of the image.


  ```js
  gravity=left

  or

  gravity=0x1
  ```


#### `height`

Specifies maximum height of the image in pixels. Exact behavior depends on the `fit` mode (described below). Example:

```js
height=250
```


#### `rotate`

Number of degrees (`90`, `180`, or `270`) to rotate the image by. `width` and `height` options refer to axes after rotation. Example:

```js
rotate=90
```

#### `sharpen`

Specifies strength of sharpening filter to apply to the image. The value is a floating-point number between `0` (no sharpening, default) and `10` (maximum). `1` is a recommended value for downscaled images. Example:

```js
sharpen=2
```

#### `trim`

Specifies a number of pixels to cut off on each side. Allows removal of borders or cutting out a specific fragment of an image. Trimming is performed before resizing or rotation. Takes `dpr` into account. Use as four numbers in pixels separated by a semicolon, in the form of `top;right;bottom;left`. Example:

```js
trim=20;30;20;0
```

#### `width`

Specifies maximum width of the image in pixels. Exact behavior depends on the `fit` mode (described below). Example:

```js
width=250
```
