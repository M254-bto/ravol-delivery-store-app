// @dart=2.9
import 'package:ravol_store/data/model/response/language_model.dart';
import 'package:ravol_store/util/app_constants.dart';
import 'package:flutter/material.dart';

class LanguageRepo {
  List<LanguageModel> getAllLanguages({BuildContext context}) {
    return AppConstants.languages;
  }
}
