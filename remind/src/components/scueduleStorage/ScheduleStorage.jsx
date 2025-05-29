import React, {useState, useEffect} from 'react';
import Header from './header/StorageHeader';
import * as S from './ScheduleStorage.style';
import { StorageTitle } from './title/StorageTitle';
import StorageCard from './card/StorageCard';
import StorageCardButtons from './card/StorageCardButton';
import { useNavigate } from 'react-router-dom';
// 아이콘 경로 불러오기
import ListWhite from '../../assets/storage/list-white.png';
import ListPink from '../../assets/storage/list-pink.svg';
import LocationWhite from '../../assets/storage/location-white.png';
import LocationPink from '../../assets/storage/location-pink.png';
import HeartPink from '../../assets/storage/heart-pink.svg';
import NoStoragePink from '../../assets/storage/nostorage-pink.svg';
import NoStorageWhite from '../../assets/storage/nostorage-white.svg';


import Pagination from './pagination/Pagination';

import createGutApi from '../../api/scueduleStorage/createGutApi';
import createDeleteApi from '../../api/scueduleStorage/createDeleteApi';
export const ScheduleStorage = () => {
  const navigate=useNavigate();
  const [page, setPage]=useState(0);
  const memberId = localStorage.getItem('userId');

  const [doneList, setDoneList] = useState([]);
  const [progressList, setProgressList] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchStorageData = async (pageNum) => {
    if (!memberId) return; // memberId 없으면 호출하지 않음
    setLoading(true);
    try {
      const data = await createGutApi(memberId, pageNum, 1);

      setDoneList(data.done);
      setProgressList(data.progress);
      setTotalPage(data.totalPage);
    } catch (error) {
      console.error('일정보관함 조회 실패:', error);
      setDoneList([]);
      setProgressList([]);
      setTotalPage(1);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (suggestionIdToDelete) => {
    const confirm = window.confirm('정말 삭제하시겠어요?');
    if (!confirm) return;

    try {
      const result = await createDeleteApi(suggestionIdToDelete, memberId);
      console.log('삭제 성공:', result.message);

      // 삭제 후 리스트 갱신 (간단한 방법: 현재 페이지 다시 불러오기)
      fetchStorageData(page);
    } catch (error) {
      alert(error.message || '삭제 중 오류가 발생했습니다.');
    }
  };


  useEffect(() => {
    fetchStorageData(page);
  }, [page, memberId]);


  return (
  <>
    <Header />
    <S.StorageLayout>
      {/* 기록된 순간들 */}
      <StorageTitle
        title="기록된 순간들"
        subTitle="다시 꺼내보고 싶은 기억이 하나 생겼어요"
      />
      {loading ? (
        <div>로딩중...</div>
      ) : doneList.length > 0 ? (
        doneList.map((item) => (
          <React.Fragment key={item.suggestionId}>
            <StorageCard
              date={item.date}
              location={item.place}
              missionTitle={item.missionDescription}
              missionList={[
                { text: item.course1, completed: true },
                { text: item.course2, completed: true },
                { text: item.course3, completed: true },
              ]}
              images={item.images}
              backgroundColor="#d7749b"
              listIcon={ListWhite}
              locationIcon={LocationWhite}
              heartIcon={HeartPink}
              textColor="#ffffff"
            />
            <StorageCardButtons
              onNavigate={() => navigate('/todayplan')}
              onDelete={() => handleDelete(item.suggestionId)} // ✅ 여기 연결
            />
          </React.Fragment>
        ))
      ) : (
       <>
    <S.EmptyImageBox>
      <img src={NoStoragePink} alt="기록된 순간 없음" />
    </S.EmptyImageBox>
    <StorageCardButtons
      onNavigate={() => navigate('/todayplan')}
      onDelete={() => {}}
      disableDelete={true}  // ✅ 비활성화
    />
  </>
      )}

      {/* 기다리는 일정들 */}
      <StorageTitle
        title="기다리는 일정들"
        subTitle="우리만의 시간이 아직 시작되지 않았어요"
      />
      {loading ? (
        <div>로딩중...</div>
      ) : progressList.length > 0 ? (
        progressList.map((item) => (
          <React.Fragment key={item.suggestionId}>
            <StorageCard
              date={item.date}
              location={item.place}
              missionTitle={item.missionDescription}
              missionList={[
                { text: item.course1, completed: false },
                { text: item.course2, completed: false },
                { text: item.course3, completed: false },
              ]}
              images={item.images}
              backgroundColor="#fff"
              listIcon={ListPink}
              locationIcon={LocationPink}
              heartIcon={HeartPink}
              textColor="#d7749b"
            />
            <StorageCardButtons
              onNavigate={() => navigate('/todayplan')}
              onDelete={() => handleDelete(item.suggestionId)} // ✅ 여기 연결
            />
          </React.Fragment>
        ))
      ) : (
<>
    <S.EmptyImageBox>
      <img src={NoStorageWhite} alt="기록된 순간 없음" />
    </S.EmptyImageBox>
    <StorageCardButtons
      onNavigate={() => navigate('/todayplan')}
      onDelete={() => {}}
      disableDelete={true}  // ✅ 비활성화
    />
  </>      )}


      <Pagination
        currentPage={page}
        totalPages={totalPage}
        onPageChange={setPage}
      />
    </S.StorageLayout>
  </>
  );
}
