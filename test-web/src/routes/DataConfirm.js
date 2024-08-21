import { useParams, useLocation, Link } from 'react-router-dom';
import DataLoad from '../components/DataDetailPage/DetailDataController';
import { Box, IconButton } from '@mui/material';
import { FaArrowLeft } from 'react-icons/fa';
import style from './style/dataconfirmstyle';

const navy = '#0F3659';

const DataConfirm = () => {
  const idParam = useParams();
  // 쿼리스트링 추출
  const searchParams = useLocation().search;
  const pageOffset = new URLSearchParams(searchParams).get('pageOffset');
  const startDate = new URLSearchParams(searchParams).get('start');
  const endDate = new URLSearchParams(searchParams).get('end');
  return (
    <Box
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: '100px 80px',
      }}
    >
      <Box sx={style.fixed}>
        <div
          style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}
        >
          {/**데이터 목록으로 돌아가기 위한 컴포넌트 */}
          <Link
            to={{
              pathname: '/DataManage',
              search: `?pageOffset=${pageOffset}&start=${startDate}&end=${endDate}`,
            }}
            style={{
              textDecorationLine: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton
              style={{
                color: `${navy}`,
                backgroundColor: 'white',
                border: `1px solid ${navy}`,
                borderRadius: '10px',
                marginRight: '10px',
              }}
            >
              <FaArrowLeft />
            </IconButton>
          </Link>
          <span
            style={{
              textDecoration: 'none',
              color: `${navy}`,
              fontSize: '30px',
              fontWeight: '600',
            }}
          >
            {idParam.id}
          </span>
        </div>
      </Box>
      {/**상세 조회 데이터 fetch */}
      <DataLoad id={idParam.id} page={'검토'} />
    </Box>
  );
};

export default DataConfirm;
