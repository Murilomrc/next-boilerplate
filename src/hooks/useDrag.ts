import React, { useState, useRef, useCallback, MouseEvent } from 'react'

export default function useDrag() {
    const [clicked, setClicked] = useState(false)
    const [dragging, setDragging] = useState(false)
    const position = useRef(0)

    const cursor = !clicked ? 'default' : 'grabbing'

    const dragStart = useCallback((ev: MouseEvent) => {
        position.current = ev.clientX
        setClicked(true)
    }, [])

    const dragStop = useCallback(
        () =>
            window.requestAnimationFrame(() => {
                setDragging(false)
                setClicked(false)
            }),
        []
    )

    const dragMove = (ev: MouseEvent, cb: (posDif: number) => void) => {
        const newDiff = position.current - ev.clientX
        const movedEnough = Math.abs(newDiff) > 5

        if (clicked && movedEnough) setDragging(true)

        if (dragging && movedEnough) {
            position.current = ev.clientX
            cb(newDiff)
        }
    }

    return {
        dragStart,
        dragStop,
        dragMove,
        dragging,
        position,
        setDragging,
        cursor,
    }
}
