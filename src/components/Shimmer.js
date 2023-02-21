export default Shimmer = () => (
    <div className="RestuarentList">
        {Array(15).fill("").map((e, i)=><div key={i} className="shimmerCard"></div>)}
    </div>
);