import rules from "../rbac-rules";

const check = (rules, role, action, data) => {
    const permissions = rules[role];
    if (!permissions) {
        //role is not present in the rules
        return false;
    }
    
    const staticPermissions = permissions.static;
    if (staticPermissions && staticPermissions.includes(action)) {
        //static rule not provide for action
        return true;
    }

    const dynamicPermissions = permissions.dynamic;
    if (dynamicPermissions) {
        const permissionCondition = dynamicPermissions[action];
        if (!permissionCondition) {
            return false;
        }
        return permissionCondition(data);
    }
    return false;
};

//react props are like function arguments in Javascript and attributes in HTML
const Can = props => 
    check(rules, props.role, props.perform, props.data) 
    ? props.yes()
    : props.no();
    
Can.defaultProps = {
    yes: () => null,
    no: () => null
};

export default Can;