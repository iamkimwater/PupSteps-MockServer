var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users/login', (req, res, next) => {
  return res.json({
    user: {
      id: 1,
      userName: '김일',
      email: '111@example.com',
      petsInfo: [
        {
          id: 1,
          petName: "레오",
          petAge: 3,
          petGender: 2,
          petBreed: 3,
          petImageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjBfMTIz%2FMDAxNjYwOTgzMzgwNjgx.JyoFq35-zHTYjJUKIQ-Wv3Ps0JDv3XNFUM03gYHnXM0g.ii15zCJfxuuGzVmdhmuPlvVN8VDQCMSp3yOf2mqVc70g.JPEG.ddogddogcafe%2F645.jpg&type=sc960_832',
        }, {
        id: 1,
        petName: '로하',
        petAge: 4,
        petGender: 1,
        petBreed: 1,
        petImageUrl:
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MDZfMTU3%2FMDAxNTg4NzQyNDgyMzA4.yAusLfS-3x3yt2LWxMJkCeu2ojZFctt1npEv-aVM75Qg.rWigEnHlc7cMwU9sNRIeM4OgWqbC8k-krR7rhClW8egg.JPEG.520dna%2F%25B0%25AD%25BE%25C6%25C1%25F6%25BB%25E7%25C1%25F80015.jpg&type=sc960_832',
      }
      ],
      userType: 0,
      walkInfo: {
        id: 1,
        walkArea: '서울시 강남구',
        walkTime: '8:00 AM',
      },
    }
  })
});

router.get('/posts', (req, res, next) => {
  return res.json({
    posts: [{
      "id": 1,
      "title": "산책 함께해요",
      "content": "한 시간 정도 가볍게 산책 하실 분들 찾아요 :)",
      "createdAt": "2023-07-04",
      "postWriter": {
        id: 1,
        userName: "김일",
        email: "111@example.com",
        petsInfo: [{
          id: 1,
          petName: "로하",
          petAge: 4,
          petGender: 1,
          petBreed: 1,
          petImageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MDNfMjMg%2FMDAxNjMwNjYxNjE1NjQ0.oieiEiEr2jmjdTTUfuveoqdK4rUmvKNhLu-mg-EaMEkg.ullL_hoi4YGPzDoB6EfeTr4hx1yu79cEEm82ZpffPAgg.JPEG.wjdwo381%2Fdeee2389-852d-444b-ac9a-824d3b1d407e.JPG&type=sc960_832',
        }],
        userType: 0,
      }
    }, {
      "id": 2,
      "title": "아침 동네 산책 할 멤버 모집",
      "content": "아침 일찍 2시간 3명 선착순!",
      "createdAt": "2023-07-01",
      "postWriter": {
        id: 2,
        userName: "김이",
        email: "222@example.com",
        petsInfo: [{
          id: 2,
          petName: "율무",
          petAge: 3,
          petGender: 2,
          petBreed: 3,
          petImageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MDZfMTU3%2FMDAxNTg4NzQyNDgyMzA4.yAusLfS-3x3yt2LWxMJkCeu2ojZFctt1npEv-aVM75Qg.rWigEnHlc7cMwU9sNRIeM4OgWqbC8k-krR7rhClW8egg.JPEG.520dna%2F%25B0%25AD%25BE%25C6%25C1%25F6%25BB%25E7%25C1%25F80015.jpg&type=sc960_832',
        }],
        userType: 1,
      }
    }, {
      "id": 3,
      "title": "저녁 한강 산책 선착순 5명",
      "content": "저녁에 맥주 한 캔씩 들고 한강 산책해요.",
      "createdAt": "2023-07-01",
      "postWriter": {
        id: 3,
        userName: "김이",
        email: "222@example.com",
        petsInfo: [{
          id: 3,
          petName: "콩순이",
          petAge: 3,
          petGender: 2,
          petBreed: 3,
          petImageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMThfMjI3%2FMDAxNjc5MTI5MDg3MzU1.Hu2kP99YaQgjQ-HDVFEvThE1Wq4fsZohGcRbyX2bDmcg.FhtIq85mHmyJCWKodqr_qPXjthAW2Nc0I1AomRErFeEg.JPEG.khj990503%2Foutput_376941380.jpg&type=sc960_832',
        }],
        userType: 1,
      }
    }, {
      "id": 4,
      "title": "율동 공원 저녁 산책하실 분",
      "content": "가볍게 1시간 정도 ㄱㄱ",
      "createdAt": "2023-06-29",
      "postWriter": {
        id: 4,
        userName: "김이",
        email: "222@example.com",
        petsInfo: [{
          id: 4,
          petName: "레오",
          petAge: 3,
          petGender: 2,
          petBreed: 3,
          petImageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjBfMTIz%2FMDAxNjYwOTgzMzgwNjgx.JyoFq35-zHTYjJUKIQ-Wv3Ps0JDv3XNFUM03gYHnXM0g.ii15zCJfxuuGzVmdhmuPlvVN8VDQCMSp3yOf2mqVc70g.JPEG.ddogddogcafe%2F645.jpg&type=sc960_832',
        }],
        userType: 1,
      }
    }]
  });
})

router.get('/posts/:postId', function (req, res, next) {
  return res.json({
    post: {
      "id": 1,
      "title": "한강 공원 산책해요",
      "content": "한강 공원에서 맥주 한 캔 들고 가볍게 1시간 정도 산책하실 분 선착순 5분 모집합니다. 댓글 달아주세요.",
      "createdAt": "2023-07-04",
      "postWriter": {
        id: 1,
        userName: "김일",
        email: "111@example.com",
        petsInfo: [{
          id: 1,
          petName: "로하",
          petAge: 4,
          petGender: 1,
          petBreed: 1,
          petImageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MDNfMjMg%2FMDAxNjMwNjYxNjE1NjQ0.oieiEiEr2jmjdTTUfuveoqdK4rUmvKNhLu-mg-EaMEkg.ullL_hoi4YGPzDoB6EfeTr4hx1yu79cEEm82ZpffPAgg.JPEG.wjdwo381%2Fdeee2389-852d-444b-ac9a-824d3b1d407e.JPG&type=sc960_832',
        }],
        userType: 0,
      },
    }
  });
})

router.post('/posts', function (req, res, next) {
  return res.json({
    feedback: {
      result: true,
      message: '',
    }
  });
})

router.post('/users/pet', (req, res, next) => {
  console.log(req.body);
  return res.json({
    petInfo: {
      id: 1,
      petName: '로로',
      petAge: 3,
      petGender: 0,
      petBreed: 1,
      petImageUrl:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MDZfMTU3%2FMDAxNTg4NzQyNDgyMzA4.yAusLfS-3x3yt2LWxMJkCeu2ojZFctt1npEv-aVM75Qg.rWigEnHlc7cMwU9sNRIeM4OgWqbC8k-krR7rhClW8egg.JPEG.520dna%2F%25B0%25AD%25BE%25C6%25C1%25F6%25BB%25E7%25C1%25F80015.jpg&type=sc960_832',
    },
  })
});

router.get('/users/logout', (req, res, next) => {
  return res.json({})
});

router.get('/comments/:postId', function (req, res, next) {
  return res.json({
    comments: [{
      "id": 1,
      "commentContent": "저도 참여할게요",
      "createdAt": "2023-07-04",
      "commentWriter": {
        id: 1,
        userName: "김욜로",
        email: "111@example.com",
        petsInfo: [{
          id: 1,
          petName: "로하",
          petAge: 4,
          petGender: 1,
          petBreed: 1,
          petImageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MDZfMTU3%2FMDAxNTg4NzQyNDgyMzA4.yAusLfS-3x3yt2LWxMJkCeu2ojZFctt1npEv-aVM75Qg.rWigEnHlc7cMwU9sNRIeM4OgWqbC8k-krR7rhClW8egg.JPEG.520dna%2F%25B0%25AD%25BE%25C6%25C1%25F6%25BB%25E7%25C1%25F80015.jpg&type=sc960_832',
        }],
        userType: 0,
      },
    }, {
      "id": 2,
      "commentContent": "몇 시에 모이나요?",
      "createdAt": "2023-07-04",
      "commentWriter": {
        id: 2,
        userName: "김코코",
        email: "222@example.com",
        petsInfo: [{
          id: 2,
          petName: "로이",
          petAge: 4,
          petGender: 1,
          petBreed: 1,
          petImageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MDZfMTU3%2FMDAxNTg4NzQyNDgyMzA4.yAusLfS-3x3yt2LWxMJkCeu2ojZFctt1npEv-aVM75Qg.rWigEnHlc7cMwU9sNRIeM4OgWqbC8k-krR7rhClW8egg.JPEG.520dna%2F%25B0%25AD%25BE%25C6%25C1%25F6%25BB%25E7%25C1%25F80015.jpg&type=sc960_832',
        }],
        userType: 0,
      },
    }]
  });
})

router.post('/comments', function (req, res, next) {
  return res.json({
    comment: {
      "id": 3,
      "commentContent": "저도요!",
      "createdAt": "2023-07-04",
      "commentWriter": {
        id: 3,
        userName: "김삼",
        email: "333@example.com",
        petsInfo: [{
          id: 3,
          petName: "라펠",
          petAge: 4,
          petGender: 1,
          petBreed: 1,
          petImageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MDZfMTU3%2FMDAxNTg4NzQyNDgyMzA4.yAusLfS-3x3yt2LWxMJkCeu2ojZFctt1npEv-aVM75Qg.rWigEnHlc7cMwU9sNRIeM4OgWqbC8k-krR7rhClW8egg.JPEG.520dna%2F%25B0%25AD%25BE%25C6%25C1%25F6%25BB%25E7%25C1%25F80015.jpg&type=sc960_832',
        }],
        userType: 0,
      },
    }
  });
});

module.exports = router;
