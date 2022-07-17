
import React, { useEffect } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from './Arrows';

 

const getItems = () =>
    Array(3)
        .fill(0)
        .map((_, ind) => ({ id: `element-${ind}` }));

function App() {
    const [items] = React.useState(getItems);

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {items.map(({ id }) => (
                <Card
                    key={id}
                />
            ))}
        </ScrollMenu>
    );
}
function Card() {
    const visibility = React.useContext(VisibilityContext);

    return (
        <div
            style={{
                height: "600px",
            }}
            tabIndex={0}
        >
            <div className="card"></div>

        </div>
    );
}

export default App;