
export interface IChildrenProps<TChildren> {
    children: TChildren;
}

export interface IChildrenAnyProps extends IChildrenProps<any> {
}

export interface IChildrenNullableProps<TChildren> extends Partial<IChildrenProps<TChildren>> {
}
