/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import millify from 'millify';
import { Row, Typography } from 'antd';
// import HTMLReactParser from 'html-react-parser';

// import { useGetExchangesQuery } from '../services/cryptoApi';
// import Loader from './Loader';

const { Title } = Typography;
// const { Panel } = Collapse;

const Exchanges = () =>
// This exchanges page have paid acess to the rapidApi
  // const { data, isFetching } = useGetExchangesQuery();
  // const exchangesList = data?.data?.exchanges;

  // if (isFetching) return <Loader />;

   (
     <>
       {/* <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row> */}
       {/* <Row>
        {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row> */}
       <Row style={{ height: '83.2vh' }}>
         <Title level={2} className="coin-name">You don't have access to this page!</Title>
       </Row>
     </>
  );
export default Exchanges;
