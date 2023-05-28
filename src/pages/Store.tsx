import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

interface IStoreProps {}

const Store: React.FunctionComponent<IStoreProps> = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item}></StoreItem>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
