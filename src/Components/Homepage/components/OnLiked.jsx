import { useState } from 'react';
import { LikeFilled, LikeOutlined } from '@ant-design/icons';
export default function OnLiked() {
    const [isLike, setLike] = useState(false)
    function handleClick() {
        setLike(!isLike)
    }
    return (
        <div onClick={handleClick}>
            {isLike ? <LikeFilled /> : <LikeOutlined />}
        </div>
    )
}