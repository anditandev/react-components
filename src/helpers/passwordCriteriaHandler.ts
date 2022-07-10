import { PasswordCriteriaStrings, PasswordCriteriaType } from "../types"

export const getPasswordCriterias = () => {
    return Object.values(PasswordCriteriaStrings).reduce((arr:PasswordCriteriaType[], value, index) => {
        const item: PasswordCriteriaType = {
            id: index,
            desc: value,
            isSatisfied: false
        }

        return [...arr,item]
    },[]);
}

export const getCriteriaIndex = (descText:PasswordCriteriaStrings, arr:PasswordCriteriaType[]) => {
    return arr.findIndex(item => descText === item.desc);
}

export const testPasswordCriteria = (pass:string, type:PasswordCriteriaStrings) => {
    switch (type) {
        case PasswordCriteriaStrings.C1: {
            const pattern = new RegExp('[A-Z]');
            return pattern.test(pass);
        };
        case PasswordCriteriaStrings.C2: {
            const pattern = new RegExp('[a-z]');
            return pattern.test(pass);
        };
        case PasswordCriteriaStrings.C3: {
            const pattern = new RegExp(/\d/g);
            return pattern.test(pass);
        };
        case PasswordCriteriaStrings.C4: {
            const pattern = new RegExp(/\W/g);
            return pattern.test(pass);
        };
        case PasswordCriteriaStrings.C5:
            return pass.length > 8;
    };
}