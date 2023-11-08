import dynamic from 'next/dynamic';
import { ReactNode, Ref, useRef } from 'react';

import { IChildrenProps } from '@/base/childrenProps';

const TouchRippleLazy = dynamic(() => import('./TouchRippleCustomRef'), { ssr: false, suspense: false });

type TouchRippleAnimProps = IChildrenProps<(params: {
    onRippleStart: (e: any) => void,
    onRippleStop: (e: any) => void,
    TouchRippleEl: ReactNode
}) => ReactNode>;

export const TouchRippleAnimLazy: React.FC<TouchRippleAnimProps> = ({
    children
}) => {

    const rippleRef: Ref<any> = useRef(null);
    const onRippleStart = (e: any) => {
        if (rippleRef?.current?.start)
            rippleRef?.current?.start(e);
    }
    const onRippleStop = (e: any) => {
        if (rippleRef?.current?.stop)
            rippleRef?.current?.stop(e);
    }

    return (<>
        {children({
            onRippleStart,
            onRippleStop,
            TouchRippleEl: (
                <TouchRippleLazy customRef={rippleRef} />
            )
        })}
    </>);
}