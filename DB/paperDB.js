let pool = require('./pool');

module.exports = {
    getSubjectType(){
      var sql = "select * from tbl_exam_subjecttype";
      return pool.execute(sql);
    },
    getSubjectLevel(){
      var sql = "select * from tbl_exam_subjectlevel";
      return pool.execute(sql);
    },
    getDepartmentes(){
      var sql = "select * from tbl_exam_epartment";
      return pool.execute(sql);
    },
    getTopics(){
      var sql = "select * from tbl_exam_topic";
      return pool.execute(sql);
    },
    postSubject(){
      var queryInfo=req.body;
      var dep=queryInfo['subject.department.id'];
      var topic=queryInfo['subject.topic.id'];
      var types=queryInfo['subject.subjectType.id'];
      var level=queryInfo['subject.subjectLevel.id'];
      var sql = "select * from tbl_exam_subject where department_id"+dep+"and subjectLevel_id="+level+"and subjectType_id="+types+"and topic_id"+topic;
      findAllInfo(sql,resp);
      return pool.execute(sql);
    }

}