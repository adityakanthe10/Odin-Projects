export default function Card({card,index,clickhandler}) {

return(
    <div className="card" onClick={() => clickhandler(index)}>
        <img src={card.img} alt={card.name} />
    </div>
);
}
