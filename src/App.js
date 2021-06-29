import "./App.css";
import Body from "./components/Body/Body";

function App() {
    let bags = [
        {
            collection: "#New",
            type: "MICRO LADY DIOR BAG",
            name: "Black Cannage Lambskin",
            price: 34,
            image: "https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-microbags/s0856ongem900/24696229-1-eng-GB/s0856ongem900_1440_1200.jpg",
        },

        {
            collection: "#New",
            type: "MICRO LADY DIOR BAG",
            name: "Cloud Blue Cannage Lambskin",
            price: 25,
            image: "https://media.dior.com/img/en_int/sku/couture/S0856ONGE_M81B_TU?imwidth=460",
        },

        {
            collection: "#New",
            type: "MICRO LADY DIOR BAG",
            name: "Rose Des Vents Cannage Lambskin",
            price: 98,
            image: "https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-fall-21-women/folder-lancement-vague-1/m9319nbdam900/24218764-1-eng-GB/m9319nbdam900_1440_1200.jpg",
        },

        {
            collection: "#New",
            type: "MICRO LADY DIOR BAG",
            name: "Deep Mint Green Cannage Lambskin",
            price: 27,
            image: "https://media.dior.com/img/en_int/sku/couture/S0856ONGE_M59H_TU?imwidth=460",
        },

        {
            collection: "#New",
            type: "MICRO LADY DIOR BAG",
            name: "Red Cannage Lambskin",
            price: 20,
            image: "https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-microbags/s0856ongem49p/24742754-1-eng-GB/s0856ongem49p_1440_1200.jpg",
        },

        {
            collection: "#New",
            type: "MICRO LADY DIOR BAG",
            name: "Cannage Lambskin with Resin Pearls",
            price: 28,
            image: "https://media.dior.com/img/en_int/sku/couture/S0856ONGU_M941_TU?imwidth=460",
        },

        {
            collection: "#New",
            type: "MEDIUM DIOR CARO BAG",
            name: "Raspberry Cannage Lambskin",
            price: 112,
            image: "https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-fall-21-women/folder-dior-caro/m9242uwhcm900/23923786-1-eng-GB/m9242uwhcm900_1440_1200.jpg",
        },

        {
            collection: "#New",
            type: "SMALL DIOR CARO BAG",
            name: "Warm Taupe Cannage Lambskin",
            price: 94,
            image: "https://media.dior.com/img/en_int/sku/couture/S2022UWHC_M01H_TU?imwidth=460",
        },

        {
            collection: "#New",
            type: "LADY DIOR MY ABCDIOR BAG",
            name: "Beige Multicolor Mizza Embroidery",
            price: 87,
            image: "https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-fall-21-women/folder-v2/m0565orgom928/24501794-1-eng-GB/m0565orgom928_1440_1200.jpg",
        },

        {
            collection: "#New",
            type: "LADY DIOR MY ABCDIOR BAG",
            name: "Beige Multicolor Mizza Embroidery",
            price: 667,
            image: "https://media.dior.com/img/en_int/sku/couture/M9243UWHC_M900_TU?imwidth=460",
        },

        {
            collection: "#New",
            type: "SMALL DIOR CARO BAG",
            name: "Multicolor Cotton Embroidery",
            price: 34,
            image: "https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-fall-21-women/folder-v2/m8641bwcym090/24500312-1-eng-GB/m8641bwcym090_1440_1200.jpg",
        },

        {
            collection: "#New",
            type: "MEDIUM DIOR CARO BAG",
            name: "Warm Taupe Cannage Lambskin",
            price: 134,
            image: "https://media.dior.com/img/en_int/sku/couture/M0565ORGL_M057_TU?imwidth=460",
        },

    ];

    return (
        <div className="App">
            <header className="App-header">
                <h2>MICRO-BAGS</h2>
                <p>
                    The shapes of the House’s iconic bags are reinvented in a
                    series of miniature versions, exalting their graphic lines
                    in new dimensions. These enchanting micro-bags finish any
                    silhouette with a touch of contemporary daring.
                </p>
                <div className="list">
                    {bags.map((bag) => {
                        return (
                            <div key={bag.name} className="bag">
                                <div
                                    className="image"
                                    style={{ background: `url(${bag.image})` }}
                                ></div>

                                <div className="collection">
                                    {bag.collection}
                                </div>
                                <div className="type">{bag.type}</div>
                                <div className="name">{bag.name}</div>
                                <div className="price">{bag.price} USD</div>
                            </div>
                        );
                    })}
                </div>
            </header>
        </div>
    );
}

export default App;
