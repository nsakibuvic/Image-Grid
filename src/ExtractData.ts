import { Block } from './blocks';

export const extractUrlsAndIds = (data: Block) => {
  let result: any = [];
  for (let child of data.children!) {
    if (child.type === 'Image') {
      result.push({
        id: child.id,
        src: child!.options!.url,
        alt: child!.data!.description,
        width: child!.data!.width,
        height: child!.data!.height,
        createdAt: child!.data!.createdAt,
      });
    }
    if (child.children) {
      result = result.concat(extractUrlsAndIds(child));
    }
  }
  return result;
};