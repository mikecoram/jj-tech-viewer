import { getTechniques } from "./TechniqueParser";
import 'isomorphic-fetch';

describe('technique parser', () => {
  it('parses techniques', () => {
    const result = getTechniques();
    console.log(result);
  });
}); 