import { atom, selector } from 'recoil';

export const AtomN = atom({
    key : "AtomN",
    default : 0
});

//atom 값이 바뀌면 *2해서 AtomN2 저장
export const AtomN2 = selector({
    key : "AtomN2",
    get : ({get}) => {
        return get(AtomN)*2;
    }
});