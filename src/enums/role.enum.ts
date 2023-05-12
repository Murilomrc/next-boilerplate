export const enum RoleEnum {
    USER = 1,
    ADMIN = 2,
}

export const RoleLabel: { [key in RoleEnum]: string } = {
    [RoleEnum.USER]: 'Usuário',
    [RoleEnum.ADMIN]: 'Administrador',
}
