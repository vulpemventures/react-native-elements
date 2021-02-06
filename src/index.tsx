import { NativeModules } from 'react-native';

type ElementsType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Elements } = NativeModules;

export default Elements as ElementsType;
