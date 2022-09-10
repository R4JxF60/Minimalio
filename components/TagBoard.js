import Tag from "./Tag";

import anime from "animejs";
import { useEffect, useState } from "react";

function TagBoard({tags, prefix}) {
    const [tagCount, setTagCount] = useState(0);

    useEffect(() => {
        setTagCount(document.querySelectorAll(`.tags-${prefix}`).length);

        const animation = anime({
            targets: `.tags-${prefix}`,
            translateY: [
                {value: '-125%', duration: 1500, delay: anime.stagger(1000, {start: 500, from: anime.random(tagCount/3, tagCount)})},
                {value: '125%', duration: 1},
                {value: '0', duration: 2000}
            ],
            loop: true
          });

        return function() {
            animation.remove(`.tags`)
        }
    });

    const tagList = tags.map(tag => <Tag key={tag} tag={`${tag}`} prefix={prefix} />);

    return (
        <div className="flex flex-wrap h-fit w-full">
            {tagList}
        </div>
    );
}

export default TagBoard;