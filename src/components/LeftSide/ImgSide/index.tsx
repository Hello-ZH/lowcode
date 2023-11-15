import {isImgComponent} from "../../../layout/Left";
import {useCanvasByContext} from "../../../store/hooks";
import {defaultCommonStyle} from "../../../utils/const";
import leftSideStyles from "../index.module.css";

const defaultStyle = {
  ...defaultCommonStyle,
};

const url = "https://www.bubucuo.cn/";

const settings = [
  {
    value: url + "react-head.png",
    style: defaultStyle,
  },

  {
    value: url + "bg1.png",
    style: defaultStyle,
  },

];

// 前端算法实战
const arithmetic = [

  "balloon-1",
  "balloon-2",
  "balloon-green",
  "cloud",
  "fairytale.webp",
  "five-balls",
  "flower",
  "girl-balloon",
  "green-learning",
  "heart-balloon",
  "prince",
  "red-flower",
  "ribbons",
  "up",
  "wing",
];

arithmetic.forEach((item) => {
  settings.push({
    value: `https://commom.pek3b.qingstor.com/all/arithmetic/${
      item.indexOf(".") > 0 ? item : item + ".png"
    }`,
    style: defaultStyle,
  });
});

export default function ImgSide() {
  const canvas = useCanvasByContext();
  const addCmp = (_cmp: any) => {
    canvas.addCmp(_cmp);
  };

  const onDragStart = (e: any, _cmp: any) => {
    e.dataTransfer.setData("drag-cmp", JSON.stringify(_cmp));
  };
  return (
    <div className={leftSideStyles.main}>
      <ul className={leftSideStyles.box}>
        {settings.map((item) => (
          <li
            key={item.value}
            className={leftSideStyles.item}
            onClick={() => addCmp({...item, type: isImgComponent})}
            onDragStart={(e) =>
              onDragStart(e, {...item, type: isImgComponent})
            }>
            <img src={item.value} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
