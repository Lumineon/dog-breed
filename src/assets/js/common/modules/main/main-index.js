import Data from './__build-data';
import Dog from './__build-dog';

const Methods = {
    init() {
        Data.init();
        Dog.init();
    }
}

export default {
    init: Methods.init
}